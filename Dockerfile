FROM node:16-alpine

WORKDIR /app

COPY package* .
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
