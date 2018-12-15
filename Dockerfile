FROM node:10.9.0-alpine

ARG YARN_VERSION=1.2.1
RUN yarn global add superstatic

# If package.json uses git, uncomment this
# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache git

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

ARG NODE_ENV=production
ARG BACKEND_HOST
ARG GOOGLE_MAP_API_KEY

COPY . /usr/src/app
RUN yarn build:production

COPY superstatic.json /usr/src/app
EXPOSE 8080
CMD ["superstatic", "dist", "--port", "8080", "--host", "0.0.0.0", "--compression", "-c", "superstatic.json"]
