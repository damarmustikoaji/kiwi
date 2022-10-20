# This file is a template, and might need editing before it works on your project.
FROM node:alpine

LABEL desc="API Automation Test"

# Install node package manager (latest version) if not available npm
# RUN apk add --update nodejs-current npm
# RUN npm install npm@latest -g

# Install curl for health check
RUN apk --no-cache add curl

# Setup default path node_modules
ARG NODE_PATH=/sdet/node_modules
ENV NODE_PATH $NODE_PATH

# Create work directory
WORKDIR /sdet/

# Copy the package and install dependencies
COPY package.json .
COPY reporter .
RUN npm install