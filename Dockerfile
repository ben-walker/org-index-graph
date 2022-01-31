FROM node:17.4.0-alpine3.15 AS node

FROM node AS build
WORKDIR /build
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
