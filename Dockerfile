FROM node:13-alpine

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /fastify-babel-boilerplate

COPY package*.json ./

RUN npm i -g npm

RUN npm i -g nodemon

RUN npm i

COPY . .

EXPOSE 49000

CMD [ "npm", "start" ]