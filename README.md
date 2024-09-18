# web-app-skeleton
All the bits and pieces for an easy start to build your own web apps and extensions for ownCloud Infinite Scale.

## Getting Started
The following instructions will help you set up your own web app/extension and a proper development environment.

To get started, clone the repository and then follow the instructions below.

### Development Environment
1. Install [pnpm](https://pnpm.io/installation) if you haven't already. Our package.json holds a `packageManager` field and we recommend to use [pnpm with corepack](https://pnpm.io/installation#using-corepack).
2. Install dependencies and run a first build process by running:
   ```bash
   pnpm install && pnpm build:w
   ```
3. Add `127.0.0.1 host.docker.internal` to your `/etc/hosts` file. We currently only support local development with Docker on Linux and macOS.
4. Start the development server:
   ```bash
   docker compose up
   ```
5. Open your browser and navigate to `https://host.docker.internal:9200` to see your oCIS dev environment. The default user is `admin` with password `admin`. Your app is automatically loaded.

### Develop Your App
You can start developing your app by modifying the files in the `src` folder. The development server will automatically reload your changes as long as you keep a running process of `pnpm build:w`. In this setup you currently need a page reload to see your changes.
Details and examples about app/extension development are available via our [developer documentation](https://owncloud.dev/clients/web/extension-system/).

You should start by rephrasing the app name `skeleton` to your desired app name in:
- package.json
- vite.config.ts
- dev/docker/ocis/apps.yaml (if you need config for your app)
- src/index.ts
- tests/unit/App.spec.ts

### Testing
This repo holds the basic setup for unit testing with [vitest](https://vitest.dev/guide/). You can run the tests with:
```bash
pnpm test:unit
```
Feel free to structure your tests as you see fit. The test files are located in the `tests/unit` folder.

In case you want to set up e2e tests with [playwright](https://playwright.io), you can see working examples in our repos [web](https://github.com/owncloud/web) and [web-extensions](https://github.com/owncloud/web-extensions).

### Build For Production
Running `pnpm build` will create a production build of your app in the `dist` folder. It also copies over all static assets placed in the `public` folder. You can then deploy the contents of the `dist` folder to your production environment, see [app deployment](https://owncloud.dev/services/web/#web-apps).

## Publish
We'd be happy to see your app in our [awesome-ocis list](https://github.com/owncloud/awesome-ocis/blob/main/README.md). Feel free to make a pull request to the README.md file to add your app.
If you feel that your app has reached a sufficient level of maturity and you want to publish it, please follow our [publishing guide](https://github.com/owncloud/awesome-ocis/tree/main/webApps).
