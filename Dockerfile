FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001 5342 9001 9002
CMD ["npm", "run", "dev" ]