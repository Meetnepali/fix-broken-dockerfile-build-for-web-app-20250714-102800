#!/bin/bash
set -e

./install.sh
echo "Starting Docker containers..."
docker-compose up