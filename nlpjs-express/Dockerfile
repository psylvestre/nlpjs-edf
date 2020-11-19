FROM node:12.18.4
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY ./bin ./bin/
COPY ./nlpjs ./nlpjs
COPY ./public ./public
COPY ./routes ./routes
COPY ./views ./views
COPY ./app.js ./app.js
COPY ./conf.json ./conf.json
COPY ./pipelines.md ./pipelines.md
EXPOSE 3000
CMD [ "npm", "start" ]