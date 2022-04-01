FROM node:17.8.0
EXPOSE 3001

RUN mkdir /src
WORKDIR /src
ADD . /src/
RUN npm install



CMD node index.js