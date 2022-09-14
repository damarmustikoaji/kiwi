FROM node:18-alpine

RUN apk add --update nodejs-current npm

RUN npm install -g mocha

RUN npm install -g chai

RUN npm install -g supertest
