#!/bin/sh

# Set environment variables
export DATABASE_URL="postgresql://postgres:password@localhost:5432"
export CORS_ORIGIN="https://studio.apollographql.com"

# Install node_modules if missing
[ ! -d "node_modules" ] && npm install

docker compose up --detach

while ! pg_isready --host=localhost --port=5432 --username=postgres; do
  sleep 1
done
