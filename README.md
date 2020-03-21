# Gershom-TS

Gershom is a github mergebot. It does the same job as bors but with a few differences

- it waits for the PR status checks to finish before enqueuing instead of immediately rejecting (not stateless)
- It unapproves PRs when they are no longer mergeable

-

# TODOS

- Figure out auth with octokit
- Log all requests and errors from octokit
- Figure out if we need to throttle

# FAQ

Why typescript?

- node has good first party support for github. It also is typed and concise. I didn't want to learn C# or .net. Ruby sucks.
