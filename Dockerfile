FROM node:22-bookworm

# Install Chrome dependencies
RUN apt-get update && apt-get install -y \
  libnss3 \
  libdbus-1-3 \
  libatk1.0-0 \
  libgbm-dev \
  libasound2 \
  libxrandr2 \
  libxkbcommon-dev \
  libxfixes3 \
  libxcomposite1 \
  libxdamage1 \
  libatk-bridge2.0-0 \
  libpango-1.0-0 \
  libcairo2 \
  libcups2

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN NODE_ENV=development npm i

# Copy source code and public assets
COPY src ./src
COPY public ./public

# Install Chrome for Remotion
RUN npx remotion browser ensure

# Copy the rendering script
COPY render.mjs render.mjs

# Set the entrypoint to accept dynamic arguments
ENTRYPOINT ["node", "render.mjs"]
