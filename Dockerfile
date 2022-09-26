FROM node:18-alpine

# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# ENV PATH=$PATH:/home/node/.npm-global/bin

ENV NODE_PATH=/app/node_modules

# ENV PATH=/app:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

WORKDIR /app/

RUN apk add --update nodejs-current npm

RUN npm install npm@latest -g

# RUN npm install -g mocha

# RUN npm install -g mochawesome

# RUN npm install -g chai

# RUN npm install -g chai-json-schema

# RUN npm install -g supertest

COPY package.json ./

COPY package-lock.json ./

RUN npm install
