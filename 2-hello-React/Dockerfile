FROM iron/node as node_base

FROM node_base as dependencies_base
WORKDIR /tmp
COPY package*.json ./
RUN npm install

FROM node_base as build_base
WORKDIR /tmp
COPY --from=dependencies_base /tmp/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node_base
WORKDIR /app
COPY --from=build_base /tmp/node_modules ./node_modules
COPY --from=build_base /tmp/dist ./dist
COPY server ./server
COPY package.json ./

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
