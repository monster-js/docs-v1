---
id: observed-attributes.md
title: Observed attributes
sidebar_label: Observed attributes
slug: /observed-attributes
---

Observed attributes are values passed down from parent component to child component and their changes is being observed by the child component.
This is different from a normal element attribute.
This feature uses the web components observed attributes implementation.
The same as web component's observed attributes we cannot pass objects and arrays to it.
Web component observed attributes only accepts string values but MonsterJS observed attributes is a little advanced than web component's implementation.
MonsterJS observed attributes can handle string, number or boolean values.

## String attribute

This type of attribute is the same as the normal web component observed attributes which accepts string as value.
It uses the `@Attr` decorator to mark the observed attributes in the child module.

Ex.

#### Child component

```typescript
import { Component, Attr } from '@monster-js/core';

@Component('app-child')
export class Child {

    @Attr
    textMessage: string = '';

    render() {
        return <h1>{this.textMessage}</h1>
    }
}
```

#### Parent component

```typescript
import { Component } from '@monster-js/core';

@Component('app-parent')
export class Parent {
    message: string = 'Hello World!';
    render() {
        return <app-child text-message={this.message}></app-child>
    }
}
```

In the example above the child module has an observed attribute named `textMessage`.
Every time the `message` property of the parent component change, it will also be reflected in the child component's `textMessage` property.

Notice that the `text-message` attribute in the `app-child` tag is in kebab case and a camel case in the child component.

## Boolean attribute

This type of attribute has the same implementation of the string attribute above.
The only difference is that the value is converted into boolean value instead of string.
It uses the `@AttrBoolean` decorator to mark the observed attributes in the child module.

Ex.

```typescript
import { Component, AttrBoolean } from '@monster-js/core';

@Component('app-child')
export class Child {

    @AttrBoolean
    toggle: boolean = false;

    render() {
        return <h1 v:if={this.toggle}>Toggle</h1>
    }
}
```

## Number attribute

This type of attribute has the same implementation of the string attribute above.
The only difference is that the value is converted into number value instead of string.
It uses the `@AttrNumber` decorator to mark the observed attributes in the child module.

Ex.

```typescript
import { Component, AttrNumber } from '@monster-js/core';

@Component('app-child')
export class Child {

    @AttrNumber
    count: number = 0;

    render() {
        return <h1>{this.count}</h1>
    }
}
```

## The attributeChangedCallback hook

This is a hook that runs each time one of the observed attributes is added, removed, or updated.
It has four arguments, first is the attribute name, second is the old value, third is the new value, and last is the camel cased attribute name.

Ex.

```typescript
import { Component, Attr } from '@monster-js/core';

@Component('app-child')
export class Child {

    @Attr
    textMessage: string = '';

    attributeChangedCallback(name: string, oldValue: any, newValue: any, camelCaseName: string) {
        console.log(name, oldValue, newValue, camelCaseName);
    }
    ...
}
```