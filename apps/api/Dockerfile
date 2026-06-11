# syntax=docker/dockerfile:1

# Base image with pnpm enabled
FROM node:22-slim AS base

RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# ========================
# Builder Stage
# ========================
FROM base AS builder

# Copy root configuration files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./

# Copy packages and the API app
COPY packages/ ./packages/
COPY apps/api/ ./apps/api/

# Install all dependencies (including dev dependencies for build)
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Build the API
RUN pnpm --filter api build

# Deploy a clean production version using pnpm deploy (pnpm v10+ compatibility)
RUN pnpm --filter api deploy --prod --legacy /app/deployed

# ========================
# Runner Stage (Production)
# ========================
FROM node:22-slim AS runner

ENV NODE_ENV=production

WORKDIR /app

# Create non-root user (security best practice for Kubernetes)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs && \
    chown -R nodejs:nodejs /app

USER nodejs

# Copy the clean deployed application from builder
COPY --from=builder --chown=nodejs:nodejs /app/deployed ./

EXPOSE 3000

# Run the built application directly
CMD ["node", "dist/server.js"]