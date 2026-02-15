FROM node:22-slim AS builder

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm ci --frozen-lockfile

COPY . .

RUN npm run prepare

RUN npm run build

# Production stage
FROM node:22-slim AS production

RUN apt-get update && apt-get install -y curl procps && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm ci --frozen-lockfile --omit=dev && npm cache clean --force

COPY --from=builder /app/build ./build

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 sveltekit && \
    chown -R sveltekit:nodejs /app

USER sveltekit

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f --connect-timeout 5 --max-time 10 http://localhost:3000/ || exit 1

CMD ["sh", "-c", "node build || (echo 'Application failed to start' && exit 1)"]
