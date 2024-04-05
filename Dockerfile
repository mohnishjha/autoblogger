# Use Node.js 20.10.0 as the base image
FROM node:20.10.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vite.js project
RUN yarn build

# Expose port 8080
EXPOSE 8080

# Command to run the Vite.js server
CMD ["yarn", "dev"]
