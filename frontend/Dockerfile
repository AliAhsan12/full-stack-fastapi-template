# Stage 1: Build React App
FROM node:18 AS build
WORKDIR /app

# Copy the package.json and package-lock.json (if exists) to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code to the container
COPY . ./

# Build the React app
RUN npm run build

# Stage 2: Serve App with nginx
FROM nginx:stable-alpine

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for Nginx (80)
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
