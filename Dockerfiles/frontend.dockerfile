# Specifying the Base Image to build this new image on
FROM node:10.15.3-alpine


# Project's maintainer information
LABEL maintainer="abejidefemi1@gmail.com"

# Set working directory
WORKDIR /src/app/frontend


# Copy source code into the working directory
COPY ./merry-ah-frontend /src/app/frontend


# Install npm dependencies
RUN npm install


# Bundle project with Webpack
RUN npm run heroku-postbuild

EXPOSE 80


# Sets the command and parameters that will be executed first when a container is ran.
ENTRYPOINT [ "npm", "start" ]