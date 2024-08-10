# Stage 1: Build
FROM node:20.16.0-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build Storybook
RUN npm run build-storybook

# Stage 2: Serve
FROM node:20.16.0-alpine

# Install http-server to serve the Storybook files
RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Copy only the Storybook build output from the build stage
COPY --from=build /app/storybook-static /app/storybook-static

# Set the environment variable for the server port
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Set the command to start the server
CMD ["http-server", "storybook-static", "-p", "3000", "--cors"]
