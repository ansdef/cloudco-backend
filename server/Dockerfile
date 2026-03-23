FROM node:18-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm install
RUN npm install -g typescript
COPY server/ .
RUN npm run build
EXPOSE 8080
CMD ["node", "dist/index.js"]
