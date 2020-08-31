FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

COPY ./. /home/node/app

WORKDIR /home/node/app

RUN npm install

USER node

EXPOSE 3000

ENTRYPOINT npm start
