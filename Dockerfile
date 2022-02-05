FROM node:16.13.2-alpine3.15 AS node

FROM node AS build
WORKDIR /build
COPY package*.json .
RUN npm ci
COPY prisma ./prisma/
RUN npx prisma generate
COPY . .
RUN npm run build

FROM node AS app
WORKDIR /app
COPY --from=build /build/dist ./dist/
COPY --from=build /build/node_modules ./node_modules/
CMD [ "node", "./dist" ]
