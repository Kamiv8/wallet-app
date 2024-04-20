FROM node:16.20.0-alpine as builder

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

ARG REACT_APP_PORT_HTTPS
ARG REACT_APP_PORT_HTTP
ARG NODE_ENV

ENV REACT_APP_PORT_HTTP $REACT_APP_PORT_HTTP
ENV NODE_ENV $NODE_ENV
ENV REACT_APP_PORT_HTTPS $REACT_APP_PORT_HTTPS


COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]