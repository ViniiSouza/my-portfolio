#!/usr/bin/env bash

# Remove Old Image
docker rm -f img-portfolio

docker build   -t img-portfolio -f Dockerfile .
