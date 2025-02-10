FROM node:18.20-alpine3.21 as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "build"]



FROM nginx:1.27-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

