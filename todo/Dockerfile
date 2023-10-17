# Use the specified Node.js version (replace "19" with the actual version number)
FROM node:19-alpine

# Rest of your Dockerfile
COPY public/ /todo/public
COPY src/ /todo/src
COPY package.json /todo/

WORKDIR /todo/

RUN npm install

CMD ["npm", "start"]


# Set the default command to start the application
CMD ["npm", "start"]