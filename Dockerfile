# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=sdet-test

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --sdet-test

COPY . .
