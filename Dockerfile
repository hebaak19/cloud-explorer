# Build the static site
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
#ci stands for clean install, it will remove the node_modules folder and install the dependencies from scratch based on the package-lock.json file. This ensures that the exact versions of dependencies are installed, which can help avoid issues with mismatched versions.
RUN npm ci
COPY . .
RUN npm run build

# Serve it over HTTPS - Caddy auto-issues a trusted Let's Encrypt cert for
# whatever hostname SITE_ADDRESS is set to at `docker run` time (needs ports
# 80 + 443 reachable so Caddy can complete the ACME challenge).
FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443
