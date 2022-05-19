---
id: bind-decorator.md
title: Bind decorator
sidebar_label: Bind decorator
slug: /bind-decorator
---

This bind decorator is used in the component.
This is to prevent the component from creating new function every time we use `.bind` method.
We can also solve this problem by using the `.bind` method in the constructor but it will cause a bloated constructor.
Using this bind decorator will promote clean codes.

Ex.

```typescript
import { Component, Bind } from '@monster-js/core';

@Component('app-greeting')
export class Greeting {

    message = 'Hello World!';

    @Bind
    getMessage() {
        return this.message;
    }

    render() {
        return <app-child prop:get-message={this.getMessage}></app-child>
    }
}
```

## Possible errors

Using bind in a method that has an argument with an interface might throw a compilation error.
To solve this issue we just need to add the `type` to the interface's import declaration.

Ex.

```typescript
import { Component, Bind } from '@monster-js/core';
import type { UserInterface } from './user.interface';

@Component('app-greeting')
export class Greeting {

    message = 'Hello ';

    @Bind
    getMessage(user: UserInterface) {
        return this.message + user.name + '!';
    }

    render() {
        return <app-child prop:get-message={this.getMessage}></app-child>
    }
}
```