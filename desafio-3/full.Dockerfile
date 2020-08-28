FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm i -g @nestjs/cli@7.4.1

COPY ./. /home/node/app

RUN cd /home/node/app && \
    if [ ! -f ".env" ]; then cp .env.example .env; fi && \
    npm install

ENTRYPOINT cd /home/node/app && \
               npm run start:dev

USER node

WORKDIR /home/node/app

EXPOSE 3000
