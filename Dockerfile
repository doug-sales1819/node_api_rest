FROM node:18.13

LABEL maintainer="Douglas Sales <douglas.sales1819@gmail.com>"

WORKDIR /app

COPY ./src /app/src/
COPY ./*.json /app/
COPY ./.env /app/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]