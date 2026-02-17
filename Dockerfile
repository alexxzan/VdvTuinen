FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --frozen-lockfile

COPY . .

RUN npm run prepare && npm run build

# Production stage
FROM node:22-slim AS production

WORKDIR /app

COPY package*.json ./

RUN npm ci --frozen-lockfile --omit=dev && npm cache clean --force

COPY --from=builder /app/build ./build

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 sveltekit && \
    chown -R sveltekit:nodejs /app

USER sveltekit

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD node -e "fetch('http://localhost:3000/').then(r => { if (!r.ok) process.exit(1) }).catch(() => process.exit(1))"

CMD ["node", "build"]
