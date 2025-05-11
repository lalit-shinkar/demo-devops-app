# Use official Node.js image
FROM node:14

# Set app directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]

