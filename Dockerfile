# Dockerfile
FROM node:18.18.1

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm run sequelize:migrate

COPY . .

CMD ["npm", "start"]
