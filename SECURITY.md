# Security Policy

## Supported versions

The default branch is the supported version.

## Reporting a vulnerability

Please use GitHub's private vulnerability reporting for this repository. Do not open a public issue with exploit details. Include the affected version, impact, and concise reproduction steps. Avoid sending real user data or secrets.

## Maintainer checks

- Keep dependencies and GitHub Actions reviewed and updated.
- Keep credentials in the deployment secret store; never commit `.env` files or production keys.
- Validate input and authorization at the server boundary for every state-changing operation.
- Run the repository's documented tests and build before release.
