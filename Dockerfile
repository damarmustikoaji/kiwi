FROM node:18-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin # optionally if you want to run npm global bin without specifying path

RUN apk add --update nodejs-current npm

RUN npm install -g mocha

RUN npm install -g chai

RUN npm install -g supertest
