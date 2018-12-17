FROM iron/node as node_base

# defined a named build 'stage'
FROM node_base as dependencies_base
WORKDIR /tmp
COPY package*.json ./
RUN npm install

# copy only necessary files from earlier stage
# leave behind lock file etc.
FROM node_base
WORKDIR /app
COPY --from=dependencies_base /tmp/node_modules /app/node_modules
COPY server.js ./

# open a port
EXPOSE 3000

CMD ["node", "server"]
