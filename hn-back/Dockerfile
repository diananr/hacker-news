FROM node:14.14.0-alpine

WORKDIR '/app'

RUN npm i -g @nestjs/cli

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm","run","start"]