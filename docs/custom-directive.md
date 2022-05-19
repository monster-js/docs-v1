---
id: custom-directive.md
title: Custom Directive
sidebar_label: Custom directive
slug: /custom-directive
---

Custom directives are classes that manipulates an element in our MunsterJS application.

## Creating a custom directive

To create a custom directive, we can use the [cli](./cli-what-is-cli) to automatically generate a directive file with boilerplate codes or we can manually create a file and write the code from scratch.

The following code is an example of a working directive codes but without functions yet.

```typescript
import { Directive } from '@munster-dev/core';

@Directive('highlight')
export class HighlightDirective {
}
```

The next step is to handle the directive by creating a method `$<directive name>`.

Here is an example on how to handle the directive `highlight:color="red"`.

```typescript
import { Directive, DirectiveArgInterface } from '@munster-dev/core';

@Directive('highlight')
export class HighlightDirective {
    $color(arg: DirectiveArgInterface) {
        const value = arg.directive.get();
        this.element.style.backgroundColor = value;
    }
}
```

Please note that the class method to handle a directive must start with `$`.
For the example above, the directive `highlight:color="red"` will call the method `$color`.
The method has one argument that has a type of `DirectiveArgInterface` provided by the core package.

```typescript
interface DirectiveArgInterface {
    directive: {
        get: () => any,
        set?: (val?: any) => void;
    };
    element: HTMLElement;
    component: ComponentInstanceInterface;
    componentWrapper: ComponentWrapperInstanceInterface;
}
```

## Register a directive

Before we can use a custom directive we need to register it to a module or component.

The following are examples on how to register a directive.

#### In component

```typescript
import { Component } from '@munster-dev/core';
import { CustomDirective1 } from './custom-directive1.directive';
import { CustomDirective2 } from './custom-directive2.directive';

@Directives(CustomDirective1, CustomDirective2)
@Component('app-greeting')
export class Greeting {
    render() {
        return <h1>Hello World!</h1>
    }
}
```

#### In module

```typescript
import { Module, BaseModule } from '@munster-dev/module';
import { CustomDirective1 } from './custom-directive1.directive';
import { CustomDirective2 } from './custom-directive2.directive';

@Module({
    directives: [CustomDirective1, CustomDirective2]
})
export class AppModule extends BaseModule { }
```

## Using a directive

After the custom directive is registered, we can now use it like the built-in directives using the following syntax: `<namespace>:<name>="<value>"`.

```typescript
import { Component } from '@munster-dev/core';
import { HighlightDirective } from './highlight.directive';

@Directives(HighlightDirective)
@Component('app-greeting')
export class Greeting {
    render() {
        return <h1 highlight:color="red">Hello World!</h1>
    }
}
```

## Value change watcher

To let our directive react when it's value is changed we can use the `createWatcher(valueCaller, element, component, updateCallback)` function from the core package.

| Params | Description |
| --- | --- |
| valueCaller       | A function that calls the value of the directive. |
| element           | The element where the directive is attached. |
| component         | The component where the directive is being used. |
| updateCallback    | A function that runs when the value of the directive is changed. |

Here's an example on how to change the background color of an element based on the value passed to its directive.

#### The directive
```javascript
import { Directive, createWatcher } from '@munster-dev/core';

@Directive('highlight')
export class HighlightDirective {
    $color(arg: DirectiveArgInterface) {
        const initialValue = arg.directive.get();
        this.element.style.backgroundColor = initialValue;

        createWatcher(() => arg.directive.get(), arg.element, arg.component, newValue => {
            this.element.style.backgroundColor = newValue;
        });
    }
}
```
#### The component

```typescript
import { Component, Directives } from '@munster-dev/core';
import { HighlightDirective } from './highlight.directive';

@Directives(HighlightDirective)
@Component('app-greeting')
export class Greeting {

    highlightColor = 'red';

    render() {
        return <h1 highlight:color={this.highlightColor}></h1>
    }
}
```

## Handling all directive names

In some cases we need to handle any names passed on our directive.

A good example for this is the props directive that accepts all directive names.
Ex. `prop:user={this.user}` or `prop:post={this.post}` where `user` and `post` are the directive names.

To catch all the directive names we can use `allDirectives(arg: AllDirectivesArgInterface)` hook.
This hook has one argument that has a type of AllDirectivesArgInterface provided by the core package.

```typescript
interface AllDirectivesArgInterface {
    directives: {
        [key: string]: {
            get: () => any,
            set?: (val?: any) => void; }>
        }
    }
    element: HTMLElement;
    component: ComponentInstanceInterface;
    componentWrapper: ComponentWrapperInstanceInterface;
}
```

Ex.

#### The component

```typescript
import { Component, Directives } from '@munster-dev/core';
import { AnimalDirective } from './animal.directive';

@Directives(AnimalDirective)
@Component('app-animals')
export class Animals {
    return <h1 animal:cat="meow meow meow" animal:chicken="cluck cluck cluck">Animal sounds</h1>
}
```

#### The directive

```typescript
import { Directive } from '@munster-dev/core';

@Directive('animal')
export class AnimalDirective {
    allDirectives(arg: AllDirectivesArgInterface) {
        console.log(arg.directives.cat.get());
        console.log(arg.directives.chicken.get());
    }
}
```

In the example above, the `allDirectives` method will log the following:

```typescript
'meow meow meow'
'cluck cluck cluck'
```