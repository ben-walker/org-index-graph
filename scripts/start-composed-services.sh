#!/bin/sh

docker compose up --detach

while ! pg_isready --host=localhost --port=5432 --username=postgres; do
  sleep 1
done
