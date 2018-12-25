FROM iron/node as node_base

FROM node_base as dependencies_base
WORKDIR /tmp
COPY package.json yarn.lock ./
RUN yarn

FROM node_base as build_base
WORKDIR /tmp
COPY --from=dependencies_base /tmp/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node_base
WORKDIR /app
COPY --from=build_base /tmp/node_modules ./node_modules
COPY --from=build_base /tmp/dist ./dist
COPY web-server ./web-server

EXPOSE 3000

CMD [ "node", "web-server" ]
