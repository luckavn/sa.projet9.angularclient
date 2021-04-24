### STAGE 1: Build ###
FROM node:10-alpine AS build
WORKDIR /angularclient/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /angularclient/src/app/dist/angularclient /usr/share/nginx/html