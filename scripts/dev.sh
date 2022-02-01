#!/bin/sh

# Install node_modules if missing
[ ! -d "node_modules" ] && npm install

# Set environment variables
export DATABASE_URL="postgresql://postgres:password@localhost:5432"
export CORS_ORIGIN="https://studio.apollographql.com"

# Start compose services
docker compose up --detach

# Wait until postgres is accepting connections
while ! pg_isready --host=localhost --port=5432 --username=postgres; do
  sleep 1
done

# Load data and start graph
npx prisma db push
npx prisma db seed
npm run start:dev
