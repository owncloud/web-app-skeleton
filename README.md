# Web App Skeleton

<!-- OSPO-managed README | Generated: 2026-04-16 | v2 -->

[![License](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](LICENSE) [![ownCloud OSPO](https://img.shields.io/badge/OSPO-ownCloud-blue)](https://kiteworks.com/opensource) [![Docker Hub](https://img.shields.io/docker/pulls/owncloud)](https://hub.docker.com/r/owncloud/ocis)

Web App Skeleton provides a complete starter template for building custom web apps and extensions for ownCloud Infinite Scale. It includes a pre-configured development environment with Docker Compose, Vite build tooling, unit testing with Vitest, and a working example extension -- giving developers everything they need to quickly scaffold and develop new oCIS web applications.

## Part of oCIS

This repository is part of the [ownCloud Infinite Scale (oCIS)](https://github.com/owncloud/ocis) developer ecosystem. It serves as the official starting point for third-party extension development, integrating with the [ownCloud Web](https://github.com/owncloud/web) extension system.

This component is part of the [oCIS Docker image](https://hub.docker.com/r/owncloud/ocis).

## Getting Started

Follow the steps below to scaffold and develop a new oCIS web application.

### Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [pnpm](https://pnpm.io/installation) (check `packageManager` field in `package.json` for the correct version)

### Development Environment

```bash
git clone https://github.com/owncloud/web-app-skeleton.git
cd web-app-skeleton
pnpm install && pnpm build:w
```

Add to `/etc/hosts`:
```
127.0.0.1 host.docker.internal
```

Start the development server:
```bash
docker compose up
```

Open [https://host.docker.internal:9200](https://host.docker.internal:9200) (default login: admin/admin).

### Customize Your App

Rename `skeleton` to your app name in:
- `package.json`
- `vite.config.ts`
- `dev/docker/ocis/apps.yaml`
- `src/index.ts`
- `tests/unit/App.spec.ts`

### Testing

```bash
pnpm test:unit             # Run unit tests (Vitest)
```

### Production Build

```bash
pnpm build                 # Build for production (output in dist/)
```

## Documentation

- [Web Extension System Documentation](https://owncloud.dev/clients/web/extension-system/)
- [Web App Deployment Guide](https://owncloud.dev/services/web/#web-apps)
- [Web Developer Documentation](https://owncloud.dev/clients/web/)
- [awesome-ocis Publishing Guide](https://github.com/owncloud/awesome-ocis/tree/main/webApps)

## Community & Support

**[Star](https://github.com/owncloud/web-app-skeleton)** this repo and **Watch** for release notifications!

- [ownCloud Website](https://owncloud.com)
- [Community Discussions](https://github.com/orgs/owncloud/discussions)
- [Matrix Chat](https://app.element.io/#/room/#owncloud:matrix.org)
- [Documentation](https://doc.owncloud.com)
- [Enterprise Support](https://owncloud.com/contact-us/)
- [OSPO Home](https://kiteworks.com/opensource)

## Contributing

We welcome contributions! Please read the [Contributing Guidelines](CONTRIBUTING.md)
and our [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

### Workflow

- **Rebase Early, Rebase Often!** We use a rebase workflow. Always rebase on the target branch before submitting a PR.
- **Dependabot**: Automated dependency updates are managed via Dependabot. Review and merge dependency PRs promptly.
- **Signed Commits**: All commits **must** be PGP/GPG signed. See [GitHub's signing guide](https://docs.github.com/en/authentication/managing-commit-signature-verification).
- **DCO Sign-off**: Every commit must carry a `Signed-off-by` line:
  ```
  git commit -s -S -m "your commit message"
  ```
- **GitHub Actions Policy**: Workflows may only use actions that are (a) owned by `owncloud`, (b) created by GitHub (`actions/*`), or (c) verified in the GitHub Marketplace.

## Security

**Do not open a public GitHub issue for security vulnerabilities.**

Report vulnerabilities at **<https://security.owncloud.com>** -- see [SECURITY.md](SECURITY.md).

Bug bounty: [YesWeHack ownCloud Program](https://yeswehack.com/programs/owncloud-bug-bounty-program)

## License

This project is licensed under the [Apache-2.0](LICENSE).

## About the ownCloud OSPO

The [Kiteworks Open Source Program Office](https://kiteworks.com/opensource), operating under
the [ownCloud](https://owncloud.com) brand, launched on May 5, 2026, to steward the open source
ecosystem around ownCloud's products. The OSPO ensures transparent governance, license compliance,
community health, and sustainable collaboration between the open source community and
[Kiteworks](https://www.kiteworks.com), which acquired ownCloud in 2023.

- **OSPO Home**: <https://kiteworks.com/opensource>
- **GitHub**: <https://github.com/owncloud>
- **ownCloud**: <https://owncloud.com>

For questions about the OSPO or licensing, contact ospo@kiteworks.com.

> **License status:** This repository is already licensed under Apache-2.0 -- the OSPO target license.
> No migration is required.
