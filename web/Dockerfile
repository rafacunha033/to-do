FROM node:23.5.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . . 

EXPOSE 5173

CMD [ "npm", "run", "dev"]