FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install -g prisma
RUN npm install
COPY . .
COPY .docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT "/entrypoint.sh"
RUN npm run build

EXPOSE 5001
