# Backend Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally for development
RUN npm install -g tsx

# Copy source code
COPY . .

# Expose port
EXPOSE 3001

# Start server
RUN npm run build
CMD ["npm", "run", "start"]
