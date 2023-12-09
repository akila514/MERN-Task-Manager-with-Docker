FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install

ARG NODE_ENV=production
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

COPY . .
ENV PORT 5000
EXPOSE ${PORT}
CMD ["node", "server.js"]
 