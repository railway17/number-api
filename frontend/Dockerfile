# build environment
FROM node as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# production environment

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf