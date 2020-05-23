###########################################################################
## Docker Base File For Production
## @author: Irfan Andriansyah <irfanandriansyah10@gmail.com>
## @since: 2020.03.23
###########################################################################

FROM node:12.16.1-alpine as builder

COPY etc/docker/production/package.json ./
RUN npm install

# Create app directory
FROM node:12.16.1-alpine
LABEL maintainer="Irfan Andriansyah <irfanandriansyah10@gmail.com>"
RUN mkdir -p /usr/src/thesis
WORKDIR /usr/src/thesis

# Copy node modules from builder
COPY --from=builder node_modules node_modules