#!/bin/sh

. ./scripts/export-env.sh
. ./scripts/start-composed-services.sh

npx concurrently --kill-others npm:*:dev
