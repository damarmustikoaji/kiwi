FROM node:18-alpine

RUN apk add --update nodejs npm

RUN npm install mocha
