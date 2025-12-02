# Base
FROM node:22-alpine AS base
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .

# DEV mode
FROM base AS dev
EXPOSE 3000
CMD ["npm", "start"]

# Build
FROM base AS build
RUN npm run build

# PRODUCTION MODE
FROM nginx:1.27.4-alpine AS prod
COPY --from=build /usr/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]