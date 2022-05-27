---
id: props.md
title: Props
sidebar_label: Props
slug: /props
---

Props is a directive that allows developers to pass any type of data from parent to child.
It is more advance than [observed attributes](./observed-attributes) since attributes can only pass string, number or boolean to child component.

## Syntax

Props directives are namespaced with `prop` followed by the property name. The syntax of props is written as `prop:<name>=<data>`.

Ex.

```
prop:message="Hello World!"
```

## Pass props from parent to child

Here's an example on how to pass properties to child component:

```typescript
import { Component } from '@monster-js/core';

@Component('app-parent')
export class Parent {
    date = new Date();
    user = { ... };
    posts = [ ... ];

    render() {
        return <app-child
            prop:date={this.date}
            prop:user={this.user}
            prop:posts={this.posts}
        ></app-child>
    }
}
```

## Get props

To get the props, we need to inject the `PropsService` provided by the core package to our child component.

Ex.

```typescript
import { Component, PropsService, Services } from '@monster-js/core';

@Services(PropsService)
@Component('app-child')
export class Child {
    constructor(private propsService: PropsService) {}

    onInit() {
        const props = this.propsService.get();
        const date = this.propsService.get('date');
        console.log(props, date);
    }

    render() {
        return <h1>Child component</h1>
    }
}
```

The `get` method of PropsService will return a value of a property if we pass the property name and it will return the whole props object if no property name is passed to the method.

## On props change event

We can watch for props changes using the `onPropsChange` hook.
This hook will trigger once there is a changes in any of the props on the parent component side.

Ex.

```typescript
import { Component, PropsService, Services } from '@monster-js/core';

@Services(PropsService)
@Component('app-child')
export class Child {

    constructor(private propsService: PropsService) {}

    onPropsChange() {
        console.log(this.propsService.get());
    }

    render() {
        return <h1>Child component</h1>
    }
}
```
