FROM node:current-alpine3.21

WORKDIR /app 

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm" "run" "dev" ]