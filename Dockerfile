FROM node:alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn install
COPY . /usr/src/app
RUN yarn build


FROM nginx:stable-alpine
RUN sed -i '1idaemon off;' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/public /app
EXPOSE 80
CMD ["nginx"]
