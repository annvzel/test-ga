FROM node:14-bullseye-slim
WORKDIR /usr/app
COPY package.json .
RUN apt update && apt install -y python3 make g++ && npm install --quiet
COPY . .

