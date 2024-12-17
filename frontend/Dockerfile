# Frontend Dockerfile for React

# Stage 1: Build React App
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json ./ 
RUN npm install --legacy-peer-deps

# Copy all the frontend files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Copy the built React app into the Nginx server's HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
