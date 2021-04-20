FROM node:10-alpine as build-step
EXPOSE 8084:4200
RUN mkdir -p /angularclient
WORKDIR /angularclient
COPY package.json /angularclient
RUN npm install
COPY . /angularclient
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/docs /usr/share/nginx/html