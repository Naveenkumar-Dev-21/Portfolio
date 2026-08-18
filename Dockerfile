# ────────────────────────────────────────────────────────────────────────────
# Next.js (standalone) production image.
#
# Build:
#   docker build -t your-dockerhub-user/portfolio:latest .
#
# Multi-arch (build on your machine, run on an ARM or x86 server):
#   docker buildx build \
#     --platform linux/amd64,linux/arm64 \
#     --tag your-dockerhub-user/portfolio:latest \
#     --push .
#
# Run:
#   docker run -d -p 3000:3000 your-dockerhub-user/portfolio:latest
# ────────────────────────────────────────────────────────────────────────────
ARG NODE_VERSION=20-alpine

# ---- 1. Dependencies --------------------------------------------------------
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
# The project has a known eslint peer-dep mismatch, so install the same way
# the repo does. This layer is cached until the lockfile changes.
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps --no-audit --no-fund

# ---- 2. Build ---------------------------------------------------------------
FROM node:${NODE_VERSION} AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- 3. Runtime -------------------------------------------------------------
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Run as an unprivileged user rather than root.
RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

# standalone output bundles server.js + the minimal node_modules it needs.
# public/ and .next/static are NOT included in standalone, so copy them too.
COPY --from=build --chown=nextjs:nodejs /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# wget ships in the node:alpine image; hit Next's own response as a liveness check.
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
