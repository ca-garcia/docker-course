# Specify a base image
FROM node:alpine as builder
WORKDIR '/app'
# Install some depenendencies
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx as server
COPY --from=builder /app/build /usr/share/nginx/html