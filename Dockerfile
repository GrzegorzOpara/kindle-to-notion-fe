#Stage 1
FROM node:22-alpine as builder
WORKDIR /
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.27.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

