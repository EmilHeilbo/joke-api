# Joke API

A dummy-project used as a starting-point for teaching Ops related activities.

## Instructions

To test the project, run

```sh
deno test
```

To generate a coverage report, run

```sh
# generate
deno test --coverage
# display
deno coverage
```

To run the local development server, run

```sh
deno task dev
```

to run the server in production, run

```sh
deno run --allow-net main.ts
```

> Note (EmilHeilbo): Dockerfile took 10 minutes, GitHub Actions took 30 minutes,
> as I haven't automated pushing to GHCR before, and am working from a new PC
