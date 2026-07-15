# ---- Base image ----
FROM node:24-alpine AS base
WORKDIR /app

# ---- Install dependencies ----
COPY package*.json ./
RUN npm ci --omit=dev

# ---- Copy source code ----
COPY . .

# Expose the port your Express server listens on
EXPOSE 8000

# Start the server (uses "node index.js" from package.json scripts)
CMD ["node", "index.js"]
