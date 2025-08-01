# Use official lightweight Node.js image
FROM node:20.0-alpine

# Set working directory
WORKDIR /app

# Install git (needed for gh-pages)
RUN apk add --no-cache git

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json* ./

# Install all npm dependencies including:
# - dotenv (already in dependencies if needed early)
# - gh-pages (as a dev dependency)
# - @iconify/react
RUN npm install

# Optional: Fix any audit issues (non-blocking)
RUN npm audit fix || true

# Copy the rest of the project files
COPY . .

# Expose React development port (only needed in dev)
EXPOSE 3000

# Start React in dev mode (you can override this with docker-compose or CLI)
CMD ["npm", "start"]
