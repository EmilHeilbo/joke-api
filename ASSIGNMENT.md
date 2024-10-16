# Assignment

This is a small assignment for use in our hiring process.
The produced artifact (the forked repo) is intended to be used during an interview, where we talk through your solution.

You should spend between 2 and 5 hours total on this.
Keep track of how much time you use, as it is relevant context during the interview.

The application is a small Deno application that exposes an HTTP endpoint for querying for silly programmer jokes.
We do not use Deno in production, however the technology isn't particularly relevant to this assignment, and Deno lends itself to very small simple applications.


## Non-Goals

Do not focus on:

- _Finishing the assignment_.
  The assignment should be achieveable for most people in the allotted time,
  but if you have no experience with any of the used technologies it might take longer.
  If out of time, finish off just like you would at the end of a work-day.
- _The specifics of the application_.
  The application itself is not relevant to the assignment.

## Goals

Your assignment is to fork the `joke-api` repository https://github.com/tudborg/joke-api.
You must then add code and configuration to the fork.

You'll want to change the codebase such that:
- When commits are pushed to any branch, `deno test` is run in Github Actions. The action should fail if any tests fail.
- When commits are pushed to the `main` branch, a github action builds a `Dockerfile` and pushes it to Github Container Registry.
- Be able to demo that running the resulting container image from Github Container Registry does in fact serve the application as intended.


## Notes

- It is possible to find good official documentation with guides and best practicies for all of the above.
- It is possible to achieve the above within the free tier limits of GitHub.
- You must create the required github actions configuration.
- You must create the required `Dockerfile`.
- You should iterate on the `Dockerfile` locally. Waiting for CI is slow and will eat much of your time.
- The application listens on port 8000 by default.
- You are allowed to change the application if necessary.

If this assignment is unclear or incorrect,
be sure note down the problem such that we can discuss it during the interview.


## During the Interview

The interview format is an informal conversation where we explore your solution.

Here are some points we'll probably want to go through:

- A short talk about the assignment itself and your overall approach to solving it.
- A demo of the solution.
- The `Dockerfile`.
- The github actions files.
- The git history and commit messages.

