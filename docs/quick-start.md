---
id: quick-start.md
title: Quick start
sidebar_label: Quick start
slug: /quick-start
---

There are many ways to setup a MunsterJS project.
One way is to use the [CLI](cli-installation.md) but the easiest way is to clone the starter app from [GitHub](https://github.com/munster-dev/starter-app).

## Create app

Clone the starter app from [GitHub](https://github.com/munster-dev/starter-app).

```bash
git clone https://github.com/munster-dev/starter-app.git munster-app
```
After cloning the repository, change directory into the starter project

```bash
cd munster-app
```

then install the dependencies

```bash
npm install
```
Start the local development server by running the following command:

```bash
npm start
```
Now we can view our app by pointing our browsers to [http://localhost:4000](http://localhost:4000)

## Project structure

After the setup is complete, you can see the file structure of project in the current directory.

```
.babelrc
package.json
tsconfig.json
node_modules
.munster
    ├── webpack.config.js
    └── munster.json
src
    ├── index.html
    ├── index.ts
    ├── styles.scss
    ├── assets
    └── environments
        ├── dev.json
        └── prod.json
    └── app
        ├── app.module.ts
        ├── app.component.tsx
        └── app.style.scss
```
* `.babelrc`                    Configuration for babel.
* `package.json`                All the dependencies and configurations of your project.
* `tsconfig.json`               The typescript configuration file.
* `node_modules/`               This is where the installed node packages are located.
* `.munster`                    Contains the configurations needed for MunsterJS project.
* `.munster/webpack.config.js`  The configuration for webpack module bundler.
* `.munster/munster.json`       The configuration for MunsterJS project. Usually used by the CLI.
* `src/`                        A directory that contains the source code and assets of your application.
* `src/index.html`              The main HTML page that is served when someone visits your application.
* `src/index.ts`                The main entry point of your application. It bootstrap the root module of the entire project.
* `src/styles.css`              Contains the global styles of the application.
* `src/assets/`                 This is the recommended directory to put all of the asset files.
* `src/environments/`           Contains the different environment files for the project.
* `src/environments/dev.json`   The development environment of the project.
* `src/environments/prod.json`  The production environment of the project.
* `src/app/`                    This is where the codes related to application is located
* `src/app/app.module.ts`       The root module of the application.
* `src/app/app.component.tsx`   Contains the ts codes of the root component. Any other components must be a child of this component.
* `src/app/app.styles.scss`     Contains the css codes of the root component.