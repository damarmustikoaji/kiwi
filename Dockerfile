FROM node:18-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

ENV NODE_PATH=/usr/lib/node_modules

RUN apk add --update nodejs-current npm

RUN npm install -g mocha

RUN npm install -g mochawesome

RUN npm install -g chai

RUN npm install -g supertest
