# --- deps ---
FROM node:22 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# --- build ---
FROM node:22 AS build
WORKDIR /app
# Build-time public envs
ARG EMAIL_USER

COPY --from=deps /app/node_modules ./node_modules
COPY . ./
RUN npm run build

# --- runtime ---
FROM node:22
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
# Only production deps for runtime:
COPY package*.json ./
RUN npm ci --omit=dev --legacy-peer-deps

# Bring in the built app
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/package*.json ./

EXPOSE 8080
CMD ["npm","run","start","--","-p","8080","-H","0.0.0.0"]
