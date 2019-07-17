# base image 
FROM node:8-alpine AS build

LABEL maintainer="Anyama Richard" MAINTAINER="Idrees Ibraheem <idrees.ibraheem@andela.com>"
LABEL application="activo-web"

# the working directory where the application would be started
WORKDIR /root/activo-web

COPY yarn.lock /root/activo-web
COPY package.json /root/activo-web

RUN yarn install 


RUN yarn remove node-sass

# # same issue above occurs here
RUN yarn add node-sass

# # same issue above occurs here
RUN yarn add react-tooltip

# update the Alpine image and install curl
RUN apk update && apk add curl 

RUN apk add --no-cache --virtual .build-deps1 g++ gcc libgcc libstdc++ linux-headers make python && \
    apk add --no-cache --virtual .npm-deps cairo-dev jpeg-dev libjpeg-turbo-dev pango pango-dev && \
    yarn install && yarn remove node-sass && yarn add node-sass && yarn add react-tooltip 

# Build the application final image with the base alpine image
FROM node:8-alpine

WORKDIR /app

# update the Alpine image and install curl
RUN apk update && apk add curl

# copy dependencies and the dist/ directory from the previous build stage.
COPY --from=build /root/activo-web/node_modules ./node_modules/

# Copy all files from the root directory into the image
COPY . .
