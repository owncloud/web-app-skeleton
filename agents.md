# agents.md — web-app-skeleton

## Repository Overview

A starter template for building custom web apps and extensions for ownCloud Infinite Scale. Includes pre-configured Vite build tooling, Vitest unit testing, Docker Compose development environment and a working example extension.

- **Classification:** oCIS
- **Activity Status:** Active
- **License:** Apache-2.0
- **Language:** TypeScript, Vue.js (Starlark listed for CI)

## Architecture & Key Paths

- `src/` — Extension source code (entry point: `index.ts`)
- `public/` — Static assets (copied to `dist/` on build)
- `tests/unit/` — Unit tests (Vitest)
- `dev/` — Development environment configuration
  - `dev/docker/ocis/` — oCIS Docker configuration for development
- `package.json` — Dependencies and scripts
- `vite.config.ts` — Vite build configuration
- `tsconfig.json` — TypeScript configuration
- `docker-compose.yml` — Development environment with oCIS
- `eslint.config.js` — ESLint configuration
- `LICENSE` — Apache-2.0 license file

## Development Conventions

- TypeScript/Vue.js with Vite build tooling
- EditorConfig and Prettier for formatting
- Vitest for unit testing
- Docker Compose for local development with oCIS backend
- App name must be consistent across package.json, vite.config.ts, src/index.ts, and apps.yaml

## Build & Test Commands

```bash
pnpm install                # Install dependencies
pnpm build                  # Production build (output in dist/)
pnpm build:w                # Build with watch mode (development)
pnpm check:types            # TypeScript type checking
pnpm lint                   # Run ESLint
pnpm test:unit              # Run unit tests (Vitest)
docker compose up           # Start development oCIS server
```

## Important Constraints

- **Apache-2.0 license:** Already aligned with the OSPO target license.
- **Template repository:** Intended to be cloned and renamed -- not used directly.
- **Docker required:** Local development requires Docker and Docker Compose.
- **Linux/macOS only:** Development environment is only supported on Linux and macOS.
- **pnpm version:** Must match the `packageManager` field in package.json (use Corepack).
- Do not introduce new **copyleft-licensed dependencies** (GPL, AGPL, LGPL, MPL) without explicit discussion in an issue first. This is especially important for repos that are migrating to or already under Apache 2.0, as copyleft dependencies would block or complicate that migration.


## OSPO Policy Constraints

### GitHub Actions
- **Only** use actions owned by `owncloud`, created by GitHub (`actions/*`), verified on the GitHub Marketplace, or verified by the ownCloud Maintainers.
- Pin all actions to their full commit SHA (not tags): `uses: actions/checkout@<SHA> # vX.Y.Z`
- Never introduce actions from unverified third parties.

### Dependency Management
- Dependabot is configured for automated dependency updates.
- Review and merge Dependabot PRs as part of regular maintenance.
- Do not introduce new dependencies without discussion in an issue first.

### Git Workflow
- **Rebase policy**: Always rebase; never create merge commits. Use `git pull --rebase` and `git rebase` before pushing.
- **Signed commits**: All commits **must** be PGP/GPG signed (`git commit -S -s`).
- **DCO sign-off**: Every commit needs a `Signed-off-by` line (`git commit -s`).
- **Conventional Commits & Squash Merge**: Use the [Conventional Commits](https://www.conventionalcommits.org/) format where the repository enforces it. Many repos use squash merge, where the PR title becomes the commit message on the default branch — apply Conventional Commits format to PR titles as well. A reusable GitHub Actions workflow enforces this.

## Context for AI Agents

- This is a template/scaffold repository, not a production application.
- The `src/index.ts` file is the extension entry point that registers with the oCIS Web runtime.
- Developers should rename all references to "skeleton" to their app name.
- The `dev/docker/ocis/apps.yaml` file configures app-specific settings in the dev environment.
- Production builds go to `dist/` and can be deployed to oCIS via `WEB_ASSET_APPS_PATH`.
