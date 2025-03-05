FROM node:23.5.0-alpine

WORKDIR /

COPY package.json package-lock.json ./

COPY . . 

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/app.js"]
