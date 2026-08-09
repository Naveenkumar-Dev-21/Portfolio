# ────────────────────────────────────────────────────────────────────────────
# Build
#   docker build -t your-dockerhub-user/portfolio:latest .
#
# Multi-arch (ARM servers — Raspberry Pi, Oracle ARM, Hetzner AX — or x86):
#   docker buildx build \
#     --platform linux/amd64,linux/arm64 \
#     --tag your-dockerhub-user/portfolio:latest \
#     --push .
#
# SITE_URL: the absolute URL of the deployed site. The canonical and Open
# Graph links in index.html are rewritten to it at build time. It defaults
# to the Vercel URL the portfolio was originally built for — set it to your
# real domain so link previews point at the right host:
#   docker build --build-arg SITE_URL=https://example.com ...
# ────────────────────────────────────────────────────────────────────────────
ARG NODE_VERSION=20-alpine
ARG NGINX_VERSION=1.27-alpine

FROM node:${NODE_VERSION} AS build

ARG SITE_URL=https://portfolio-naveenkumar-dev-21.vercel.app

WORKDIR /app

# Install first: the layer cache then only breaks when the lockfile changes.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# Rewrite every hardcoded occurrence of the default URL to the real one,
# then build. The rewrite runs before the bundler, so the built index.html
# carries the right absolute URLs for og:image, canonical, and JSON-LD.
RUN if [ -n "${SITE_URL}" ]; then \
      grep -rl "portfolio-naveenkumar-dev-21.vercel.app" . \
        --include="index.html" \
        --include="*.js" \
        --include="*.jsx" \
        --include="*.json" \
        --exclude-dir=node_modules \
        --exclude-dir=dist \
      | xargs -r sed -i "s|portfolio-naveenkumar-dev-21.vercel.app|${SITE_URL#https://}|g"; \
    fi
RUN npm run build

# ────────────────────────────────────────────────────────────────────────────
# Serve — non-root nginx. Master process runs as uid 101 instead of root.
# ────────────────────────────────────────────────────────────────────────────
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION}

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --no-cache -O /dev/null http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
