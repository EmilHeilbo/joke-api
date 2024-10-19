FROM docker.io/denoland/deno:alpine-2.0.2

WORKDIR /app
USER deno

COPY . .
RUN deno cache main.ts

EXPOSE 8000
CMD [ "run", "--allow-net", "main.ts" ]