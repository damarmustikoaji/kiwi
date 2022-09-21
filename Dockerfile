FROM ubuntu:18.04

# ENV NPM_CONFIG_PREFIX=/durian/.npm-global

# ENV PATH=$PATH:/durian/.npm-global/bin

# RUN apk add --update nodejs-current npm

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm

# Install the application's dependencies into the node_modules's cache directory.
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

RUN npm install -g mocha
