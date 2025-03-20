# ======= STAGE 1: Build =======
FROM node:20 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

# Enable Corepack if using Yarn or Pnpm (optional)
RUN corepack enable && npm ci --no-audit --no-fund

# Copy the entire project (after dependencies are installed)
COPY . .

# # Build the project
# RUN npx vite build

EXPOSE 80

CMD ["npx", "vite", "dev", "--host", "0.0.0.0" ]

# # ======= STAGE 2: Serve with Nginx =======
# FROM nginx AS runner

# # Set working directory inside the container
# WORKDIR /usr/share/nginx/html

# # Remove default Nginx static assets
# RUN rm -rf ./*

# # Copy built frontend files from the builder stage
# COPY --from=builder /app/dist ./

# # Copy custom Nginx configuration (if needed)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose the default Nginx port
# EXPOSE 80

# # Start Nginx (this is the default CMD for the nginx image)
# CMD ["nginx", "-g", "daemon off;"]

