FROM node:18-alpine

ENV NPM_CONFIG_PREFIX=/durian/.npm-global

ENV PATH=$PATH:/durian/.npm-global/bin

RUN apk add --update nodejs-current npm

# Install the application's dependencies into the node_modules's cache directory.
COPY package.json ./
COPY package-lock.json ./
RUN npm install
