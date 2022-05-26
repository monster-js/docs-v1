---
id: cli-create-application.md
title: Create application
sidebar_label: Create application
slug: /cli-create-application
---

To create new application using CLI, we just need to run the following command.

```bash
mn new hello-world-app
```

The syntax of this command is `mn new <application name>`.

Running this command will generate a MonsterJS files needed to create an application and automatically install the npm packages.
Once the installation of the packages is complete, we now have a new MonsterJS application.

## Local development

To run a local development server for our project, we need to open a cli and change directory to the root of the project and run the following command.

```bash
npm start
```
or
```bash
yarn start
```

After the command is done, we can now view our application by pointing our browsers to [http://localhost:4000](http://localhost:4000).
The port `4000` can be changed by editing the entry in the package.json file under "scripts.start" script.