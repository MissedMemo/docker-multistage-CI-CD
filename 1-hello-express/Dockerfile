FROM iron/node

# location to copy files & perform operations
WORKDIR /app

# copy package AND lock files, & generate dependency libs
COPY package*.json ./
RUN npm install

COPY server.js ./

# open a port
EXPOSE 3000

ENTRYPOINT ["npm", "start"]
