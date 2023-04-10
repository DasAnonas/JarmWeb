FROM node:16

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000
			

CMD [ "node", "index.js" ]
