FROM node:18
WORKDIR /app
COPY package.json .
RUN corepack enable
RUN pnpm i
COPY . .
EXPOSE 8089
CMD ["pnpm", "run", "dev"]