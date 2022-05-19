---
id: change-detection.md
title: Change detection
sidebar_label: Change detection
slug: /change-detection
---

Change detection is a way to synchronize the data between component's logic and view.
It triggers when a component method is called.
This usually happens during user interaction with the UI like click, input, drag and other events.

## Manually trigger change detection

In some cases, you may need to manually trigger change detection of a component.

To manually trigger change detection we need our component to extend from the `BaseComponent` provided by the core module.
The base component provides a method `$detectChanges`. We just need to call this method and it will update the component for changes.
This is very helpful when you want to run change detection inside a callback function that is not a component method.

Ex.

```typescript
import { Component, BaseComponent } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting extends BaseComponent {
    ...
    connectedCallback() {
        this.greetingService.getMessage().then((message) => {
            this.message = message;
            this.$detectChanges();
        });
    }
    ...
}
```

The callback function inside the `.then` will not trigger change detection since the callback function is not a component's method.
So we call the `$detectChanges` method in order to trigger change detection.

## Handling callbacks

Callback functions will not trigger change detection but we can still pass a component method as a callback so we can take advantage of automatic change detection when a component method is called.

Ex.

```typescript
import { Component, BaseComponent, Bind } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting extends BaseComponent {
    ...
    connectedCallback() {
        this.greetingService.getMessage().then(this.callbackHandler);
    }

    @Bind
    callbackHandler(message: string) {
        this.message = message;
    }
    ...
}
```

It is recommended to use the `@Bind` decorator to bind the `this` context of the method(`callbackHandler`) to the current component instead of using `.bind` method from javascript prototype.

:::danger
Bind decorator might throw an error because of interfaces in it's arguments.
Please check the [Bind decorator](./bind-decorator) documentation to fix the error.
:::