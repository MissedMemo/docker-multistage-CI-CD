FROM iron/node

# location to copy output
WORKDIR /dist

# copy package & package-lock files
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
