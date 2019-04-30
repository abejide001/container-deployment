# Base Image to build this new image on
FROM node:10.15.3-alpine

# Project's maintainer information
LABEL maintainer="abejidefemi1@gmail.com"

# Set ENV to Production
ENV NODE_ENV=production

# Set working directory
WORKDIR /src/app/backend

# Copy source code into the working directory
COPY ./merry-ah-backend /src/app/backend


# Install npm dependencies
RUN yarn install

# Bundle project with Webpack
RUN yarn build

EXPOSE 9000

# Sets the command and parameters that will be executed first when a container is ran.
ENTRYPOINT ["yarn", "start"]