---
id: pipes.md
title: Pipes
sidebar_label: Pipes
slug: /pipes
---

Pipes are used to transform a string, object, number and other values for display.
They are very useful because it can be used directly in template or logic in all of our components.

## Register pipe

Unlike directives, pipes provided by the core package are not automatically available in all components by default.
We need to register them to component or module before we can use it.

Here are the examples on how to register a pipe in component and in module.

#### In component

```typescript
import { Pipes, LowercasePipe } from '@monster-js/core';

@Pipes(LowercasePipe)
@Component('app-greeting')
export class Greeting {
    render() {
        return <h1>{ 'Hello World!' | lowercase }</h1>
    }
}
```

#### In Module

```typescript
import { LowercasePipe } from '@monster-js/core';
import { Module, BaseModule } from '@monster-js/module';

@Module({
    pipes: [LowercasePipe]
})
export class GreetingModule extends BaseModule { }
```

## Template pipes

In the template, we can use the pipes inside jsx expression container `{}`.
The syntax is `{ <value> | <pipe selector> }`.

Ex.

```typescript
<label>{ 'Hello World' | lowercase }</label>
```

In the example above, the `lowercase` is the pipe.

:::danger
Template pipes may throw a typescript type checking error since the pipe operator is originally an arithmetic operator that accepts any, number and bigint values.
A temporary fix for this is to set our values to type any.
This error will be addressed in later releases.
:::

Template pipes can also be chained to another pipe.

Ex.

```typescript
<label>{ 'Hello World 123' | lowercase | removeNumeric }</label>
```

In the example above, the `lowercase` pipe will run first and the `removeNumeric` pipe will run after the lowercase pipe.

## Logic pipes

To use the pipe in our component's logic, we need to inject the pipe in the constructor.
After injecting the pipe, we can now call the `transform(value: any, ...params?: any[])` method of the pipe to transform values.

Ex.

```typescript
import { Component, Pipes } from '@monster-js/core';
import { LowercasePipe } from './lowercase.pipe';

@Pipes(LowercasePipe)
@Component('app-greeting')
export class Greeting {

    message = 'Hello World!';

    constructor(private lowercasePipe: LowercasePipe) {}

    onInit() {
        this.message = this.lowercasePipe.transform(this.message);
    }

    render() {
        return <h1>{this.message}</h1>
    }
}
```

## Available pipes

Here are some usable pipes included in the core package.

<!-- 
Date pipe resources
https://github.com/angular/angular/blob/main/packages/common/src/pipes/date_pipe.ts
-->
| Pipe | Description |
| --- | --- |
| [UppercasePipe](./available-pipes#lowercasepipe) | Transform string into uppercase. |
| [LowercasePipe](./available-pipes#uppercasepipe) | Transform string into lowercase. |

## Pipe with parameters

Pipes can also have one or more parameters to be used during transformation.

#### In template

```typescript
<label>{this.date | date('YYYY-MM-DD', 'Invalid date')}</label>
```

#### In logic

```typescript
import { Component, Pipes } from '@monster-js/core';
import { DatePipe } from './date.pipe';

@Pipes(DatePipe)
@Component('app-greeting')
export class DateComponent {

    date = new Date();

    constructor(private datePipe: DatePipe) {}

    onInit() {
        this.date = this.datePipe.transform(this.date, 'YYYY-MM-DD', 'Invalid date');
    }

    render() {
        return <h1>{this.date}</h1>
    }
}
```