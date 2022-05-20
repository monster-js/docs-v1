---
id: lifecycle-hooks.md
title: Lifecycle hooks
sidebar_label: Lifecycle hooks
slug: /lifecycle-hooks
---

Lifecycle hooks are functions that lets you run a block of codes when your component triggers a lifecycle event.

## Available hooks

`com` components, `dir` directives, `ser` services, `pip` pipe

| Hooks                                                                         | Description |
| ---                                                                           | --- |
| onInit() `com`                                                          | The first hook to run when the component is initialized. |
| beforeViewInit() `com`                                                  | This will be called before the view is build as dom elements. |
| afterViewInit() `com` `dir`                                       | This will be called after the view is built as dom elements. |
| onChangeDetection() `com` `dir`                                   | This is called every time the component's change detection runs. |
| onViewChange() `com` `dir`                                        | This will be called every time there are changes in view caused by change detection. |
| onDestroy() `com` `dir`                                           | This will be called when a component is destroyed. This is used for cleanup like unsubscribing all subscriptions. |
| onReceiveParent(parent: any) `ser` `pip`                           | This is called after a service or pipe is initialized. This is used when a service or pipe needs to access the parent instance where it is injected. |
| onReceiveConfig(config: any, container: Container) `ser`                  | This is called after a service is initialized. This is used when a service is designed to depend on a configuration after initialization. |
| adoptedCallback() `comp` `dir`                                     | A native web component hook. Called when a component is moved from one HTML document to another using the adoptNode(). This happens when we have `<iframe>` elements in a page. |
| attributeChangedCallback(name: string, oldValue: any, newValue: any, camelCaseName: string) `com` `dir` | A native web component hook. Called when an observed attribute has been added, removed or changed. |
| connectedCallback() `com` `dir`                                   | A native web component hook. Called when the component is connected to the dom tree |
| disconnectedCallback() `com` `dir`                                | A native web component hook. Called when the component is disconnected to the dom tree. |
| allDirectives(param: AllDirectivesArgInterface) `dir`             | Called after directive is initialized. This hook is used to handle all directive names. |
| onPropsChange() `com`                                             | Called when there are changes to component's props. |

## Hooks usage

Here are some examples on how to use the hooks in component, service and directive

### In component

```typescript
import { Component } from '@monster-js/core';

@Component('app-greeting')
export class Greeting {
    onInit() {
        console.log('Hi!, I am in onInit hook');
    }

    connectedCallback() {
        console.log('Hi!, I am in connectedCallback hook');
    }

    disconnectedCallback() {
        console.log('Hi!, I am in disconnectedCallback hook');
    }
}
```

### In service

```typescript
import { Service } from '@monster-js/core';

@Service()
export class GreetingService {
    onReceiveParent(parent: any) {
        console.log('Hi!, I am in onReceiveParent hook');
    }

    onReceiveConfig(config: any, container: Container) {
        console.log('Hi!, I am in onReceiveConfig hook');
    }
}
```

### In directive

```typescript
import { Directive } from '@monster-js/core';

@Directive('highlight')
export class HighlightDirective {
    connectedCallback() {
        console.log('Hi!, I am in connectedCallback hook');
    }

    allDirectives(param: AllDirectivesArgInterface) {
        console.log('Hi!, I am in allDirectives hook');
    }

    disconnectedCallback() {
        console.log('Hi!, I am in disconnectedCallback hook');
    }
}
```
