# Stage 1 - the build process
# FROM node:8
# COPY . /app
# WORKDIR /app
# RUN npm install -g serve@10.1.1
# RUN npm install --save
# RUN npm run build
# RUN rm -rf node_modules && npm cache clean --force
# CMD ["serve", "-s", "build"]
# EXPOSE 3000

FROM node:8 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]