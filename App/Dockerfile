FROM node:9 as builder
RUN mkdir /tamuhack
WORKDIR /tamuhack
COPY . .

RUN yarn install --quiet
RUN yarn run build

FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder tamuhack/build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
