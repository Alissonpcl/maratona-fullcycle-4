FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

COPY ./. /home/node/app

WORKDIR /home/node/app

RUN npm install

#O projeto usa a versao mais atual porem acima da 3.4.0 existe um bug
#ja conhecido que faz com o container nao fique aberto
#https://github.com/facebook/create-react-app/issues/8688
RUN npm install react-scripts@3.4.0

USER node

ENTRYPOINT npm start

EXPOSE 3000
