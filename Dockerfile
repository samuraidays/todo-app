FROM node:18.15.0-alpine3.17
WORKDIR /app
RUN npm install -g ionic cordova
CMD ["sh"]
