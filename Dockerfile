# Build stage
FROM node:22-alpine AS base


ENV NODE_ENV=production

ENV NEXT_TELEMETRY_DISABLED=1


WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

COPY yarn.lock ./

RUN corepack enable


# Copy the rest of the application code
COPY . .

# Install dependencies
RUN yarn install

# Build the Next.js app
RUN yarn build


FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=base /app/out/ /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Serve the app
CMD ["nginx", "-g", "daemon off;"]