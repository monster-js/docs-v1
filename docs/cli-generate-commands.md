---
id: cli-generate-commands.md
title: Generate commands
sidebar_label: Generate commands
slug: /cli-generate-commands
---

CLI is very helpful in generating files for MonsterJS application.
It makes creating components, services, modules and other files very easy.

The syntax for generate command is `mn generate <type> <name>`. The type is the type of file we want to generate and the name is the name of the files to be generated. The name can also be a pathname.

Here is an example command to generate a component.

```bash
mn generate component hello-world
```

The command above will generate the files like the following.

```
hello-world
    ├── hello-world.component.tsx
    └── hello-world.styles.scss
```

## Generate types

Here's a list of available types for generate command:

| Type | Description |
| --- | --- |
| component     | Generate a component file. |
| guard         | Generate a route guard that can help the developer to allow or prevent the user from navigating certain paths or viewing components. |
| service       | Generate a service file that will hold the business logic of the application. |
| class         | Generate a simple typescript class. |
| interface     | Generate a typescript interface to describe a data. |
| directive     | Generate a directive file. |
| pipe          | Generate a pipe file. |
| module        | Generate a module file to group our components, directives, and other files that are related to the module. |

For more information about each command, we can check the help feature of the cli.
The syntax for this is `mn generate <command type> --help`.

Ex.

```bash
mn generate component --help
```

This will show additional information for the generate component command.
