---
id: quick-start.md
title: Quick start
sidebar_label: Quick start
slug: /quick-start
---

There are many ways to setup a MonsterJS project.
One way is to use the [CLI](./cli-what-is-cli) but the easiest way is to clone the starter app from [GitHub](https://github.com/monster-js/starter-app).

## Create app

Clone the starter app from [GitHub](https://github.com/monster-js/starter-app).

```bash
git clone https://github.com/monster-js/starter-app.git monster-app
```
After cloning the repository, change directory into the starter project

```bash
cd monster-app
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
.monster
    ├── monster.json
    └── webpack.config.js
node_modules
src
    └── app
        ├── app.component.tsx
        ├── app.module.ts
        └── app.style.scss
    ├── assets
    └── environments
        ├── dev.json
        └── prod.json
    ├── index.html
    ├── index.ts
    └── styles.scss
.babelrc
package.json
tsconfig.json
```
* `.monster`                    Contains the configurations needed for MonsterJS project.
* `.monster/monster.json`       The configuration for MonsterJS project. Usually used by the CLI.
* `.monster/webpack.config.js`  The configuration for webpack module bundler.
* `node_modules/`               This is where the installed node packages are located.
* `src/`                        A directory that contains the source code and assets of your application.
* `src/app/`                    This is where the codes related to application is located
* `src/app/app.component.tsx`   Contains the ts codes of the root component. Any other components must be a child of this component.
* `src/app/app.module.ts`       The root module of the application.
* `src/app/app.styles.scss`     Contains the css codes of the root component.
* `src/assets/`                 This is the recommended directory to put all of the asset files.
* `src/environments/`           Contains the different environment files for the project.
* `src/environments/dev.json`   The development environment of the project.
* `src/environments/prod.json`  The production environment of the project.
* `src/index.html`              The main HTML page that is served when someone visits your application.
* `src/index.ts`                The main entry point of your application. It bootstrap the root module of the entire project.
* `src/styles.css`              Contains the global styles of the application.
* `.babelrc`                    Configuration for babel.
* `package.json`                All the dependencies and configurations of your project.
* `tsconfig.json`               The typescript configuration file.