# Use the official Node.js image from Docker Hub
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the application
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
    