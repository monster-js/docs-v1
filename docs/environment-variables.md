---
id: environment-variables.md
title: Environment variables
sidebar_label: Environment variables
slug: /environment-variables
---

Environment variables helps us define static variables for our application.
It allows us to configure our project for different deployments without changing the codes inside our application.
We can define environment variables for production, development and even custom environment variables.

Whe we create our application there are two available environment variables provided for us.
If we check the `src/environments` directory, we can see that there is `dev.json` and `prod.json`.

## Custom environment variables

To create a new environment variable, we just need to create a file named `<env name>.json`.
The `<env name>` is the one that is being used in the cli option `--env`.

Inside the created environment file should be a json with a require property `MODE`.

Ex.

```json
{
    "MODE": "production"
}
```

The `MODE` property can have value of `production` or `development`.
This is to identify what type of build we are going to make when using the environment.

## Using environment in project

To use our environment variables inside our project we can call it using `process.env.<env property name>`.

Ex.

```typescript
import { Component } from '@monster-js/core';

@Component('app-deployment')
export class Deployment {
    render() {
        return <h1>Deployment: {process.env.MODE}</h1>
    }
}
```

## Using environment in CLI

To use our environment variables in CLI, we just need to pass the environment name to the `--env` option in CLI commands.

Example, if we have environment variables like the following:

```
environments
    ├── dev.json
    ├── uat.json
    └── prod.json
```

And we want to build our application using the `uat.json` environment.
Then we can use the following command:

```bash
mn build --env uat
```
