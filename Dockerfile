FROM node:alpine as builder

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

COPY yarn.lock .

# Install the dependencies
RUN yarn

# Copy the source code
COPY . .


# Build the application
RUN npm run build

# Build the production image



FROM nginx:alpine-slim

# Copy the build files
COPY --from=builder /app/out /usr/share/nginx/html