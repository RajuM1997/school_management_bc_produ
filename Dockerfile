FROM node:21-alpine as BULID_IMAGE

WORKDIR /app

COPY  ./package*.json ./
COPY  ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5000

CMD [ "yarn", "dev" ]