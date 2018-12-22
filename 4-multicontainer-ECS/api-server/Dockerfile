FROM iron/node as node_base

FROM node_base as dependencies_base
WORKDIR /tmp
COPY package.json yarn.lock ./
RUN yarn

FROM node_base
WORKDIR /app
COPY --from=dependencies_base /tmp/node_modules ./node_modules
COPY src ./server

EXPOSE 3001

CMD [ "node", "server" ]
