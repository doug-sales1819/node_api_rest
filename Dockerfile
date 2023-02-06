FROM node:18.13-slim as BUILDER
LABEL maintainer="Douglas Sales"

WORKDIR /usr/src/app

COPY package*.json  ./
RUN npm install

COPY src ./src

FROM node:18.3.0-alpine 

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3000

CMD ["npm", "start"]
