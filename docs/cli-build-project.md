---
id: cli-build-project.md
title: Build project
sidebar_label: Build project
slug: /build-project
---

MonsterJS CLI provides a command to compile the project for deployment.
The output of this build process is found in `./build` directory by default but can be changed based on the options when running the cli command to build the project. 

## Build command

To build the project we can run the following command:

```bash
mn build
```

## Command options

| Option | Description | Value type | Default |
| --- | --- | --- | --- |
| --env <value\> | Build the project using the specified environment. | string | dev |
| --output <value\> | The directory where it should output the bundles, assets and other files. | string | dist |

Ex.

```bash
mn build --env prod
```