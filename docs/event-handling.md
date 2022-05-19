---
id: event-handling.md
title: Event handling
sidebar_label: Event handling
slug: /event-handling
---

Event handling is a directive lets the component to respond to user action on the UI like button clicks, text inputs, drag elements and other actions.
It uses a directive with namespace of `on` to bind the component methods to an element as an event listener.

## Syntax

The syntax of event handling directive is `on:<event_name>={<component_method>}`.
The component_method this syntax must be a function and not a function call expression.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {
    clickMe() {
        console.log('Hello World!');
    }

    render() {
        return <button on:click={this.clickMe}>Greet</button>
    }
}
```

## Method parameters

Since event handling directive accepts a function as a directive value.
We need to pass an unnamed function or a fat arrow function and return the call expression of the component method in order for us to be able to pass some parameters to it.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {
    clickMe(name: string) {
        console.log(`Hello ${name}!`);
    }

    render() {
        return <button on:click={() => this.clickMe('Johnny')}>Greet</button>
    }
}
```

## Event variable

We can also get the event variable that holds the data of the event.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {
    clickMe(event) {
        console.log(event);
    }

    render() {
        return <button on:click={(event) => this.clickMe(event)}>Greet</button>
    }
}
```

or just simply

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {
    clickMe(event) {
        console.log(event);
    }

    render() {
        return <button on:click={this.clickMe}>Greet</button>
    }
}
```