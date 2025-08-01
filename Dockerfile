# Use official lightweight Node.js image
FROM node:20.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json files
COPY package.json package-lock.json* ./

# Install git (needed for gh-pages to push)
RUN apk add --no-cache git

# Install npm dependencies (including dotenv support early)
RUN npm install

# Install dotenv explicitly (needed for fetch.js)
RUN npm install dotenv

# Install gh-pages for deployment
RUN npm install gh-pages --save-dev

# Optional: Add extra libraries like iconify
RUN npm install @iconify/react

# Audit fix (optional)
RUN npm audit fix || true

# Copy rest of your app files
COPY . .

# Expose React dev port (optional)
EXPOSE 3000

# Default command (useful for development)
CMD ["npm", "start"]
