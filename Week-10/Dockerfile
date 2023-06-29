FROM node:18.15-alpine

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app/

ENV NODE_ENV=docker

CMD [ "npm", "start" ]