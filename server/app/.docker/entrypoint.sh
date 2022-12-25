#!/bin/bash

set -e
set -u

npx prisma generate
npx prisma migrate deploy
npm run start:prod
