---
id: component.md
title: Component
sidebar_label: Component
slug: /component
---

Components are the most basic building block of an application.
It is composed of template, logic and styles.
It is used to split the UI into small and reusable pieces of codes.

:::note
Component file must have an extension of `.tsx` instead of `.ts`.
:::

## Logic and template

The logic and template is combined in a single file.
It is a typescript class that has a `@Component` decorator and a `render()` method that returns a jsx element.
Since a component has jsx elements inside it, it should have an extension of `.tsx` instead of `.ts`.

```typescript
import { Component } from '@monster-js/core';

@Component('app-greeting')
export class Greeting {
    render() {
        return <h1>Hello World!</h1>
    }
}
```

The parameter of `@Component` will be the web component selector.
In the example above the selector is `app-greeting` which means our component must be `<app-greeting />` when we render it to the view.

:::caution
Selector must be all lowercase or it might throw an error if there are uppercase characters.
:::

## Styles

MonsterJS uses `sass` by default but we can also use other css frameworks depending on our webpack configuration.
This styles will only affect it's component and will have no effect on it's parent and child components.

Component styles is imported directly to the `.component.tsx` file.

Ex.
```typescript
import './greeting.styles.scss';
import { Component } from '@monster-js/core';

@Component('app-greeting')
export class Greeting {
    render() {
        return <h1>Hello World!</h1>
    }
}
```

:::note
In order for the component styles to work properly,
the component and styles must have the same filename with `.component.tsx` extension for the component and `.styles.scss` extension for the styles.
:::

Ex.

```
greeting
    ├── greeting.component.tsx
    └── greeting.styles.scss
```

## Shadow dom component

To encapsulate our component we can attach a shadow dom to it.
To do this, we can use the `@ShadowComponent` decorator instead of `@Component`.
The @ShadowComponent decorator has two parameters.
First is the component selector, and second is the shadow mode(`open` or `closed`) which is optional and the default is `open`,

Ex.

```typescript
import './greeting.styles.scss';
import { ShadowComponent } from '@monster-js/core';

@ShadowComponent('app-greeting', 'closed')
export class Greeting {
    render() {
        return <h1>Hello World!</h1>
    }
}
```

## Custom element component

Custom element allows us to define a new type of elements.
To create a custom element, we need decorate our component with `@CustomElement` decorator.
This decorator has two parameter, first is the type of custom element constructor and second is what type of element it will extend.

Ex.

```typescript
import './greeting.styles.scss';
import { Component, CustomElement } from '@monster-js/core';

@CustomElement(HTMLButtonElement, 'button')
@Component('app-custom-button')
export class CustomButton {
    render() {
        return <span>I am a button!</span>
    }
}
```

In the example above, we created a custom element using `@CustomElement(HTMLButtonElement, 'button')`.
That means we need to attach the component in a `<button></button>` element like the following.

```typescript
<button is="app-custom-button"></button>
```

## Define component

Component must be defined before we can use it.
Since MonsterJS components are web components, we can use the `customElement.define` as long as we have the MonsterJS polyfill imported before defining the components.

Ex.
```javascript
// index.ts
import '@monster-js/core/polyfill';
import { Greeting } from './greeting.component';

customElement.define('app-greeting', Greeting);
```
We can also use the selector defined in the `@Component` decorator.
```javascript
// index.ts
import '@monster-js/core/polyfill';
import { getSelector } '@monster-js/core';
import { Greeting } from './greeting.component';

customElement.define(getSelector(Greeting), Greeting);
```

:::note
We should only import the polyfill once. It is recommended that we import the polyfill at the top of our entry point.
:::

## Global components

Components can be registered as a global component.
Global components can be used in any components inside our application.

Ex.

```typescript
import { GlobalComponents } from '@monster-js/core';

const gc = new GlobalComponents();
gc.add('app-greeting');
```

Global components needs to be registered as global components first before we define the component using `customElements.define` to avoid issues.

## Register component to a module

For the component to be available for other components in a module, we need to register the component to the module.
Registered component does not need to be defined using `customElement.define`.

To register the component, we just need to pass the component to the components array in a module.

Ex.

```typescript
import { Module, BaseModule } from '@monster-js/module';
import { Greeting } from './greeting.component';

@Module({
    components: [Greeting]
})
export class AppModule extends BaseModule { }
```

:::note
Components must be registered to one module only.
:::

Components must be registered to one module only.
If we want to use the component inside other module, we just need to export the component from it's module and import it's module to the one that needs the component.
Please see [Module](./module#register-components) for more information about exporting a component from it's module.

## Render a component into view

To render a component into view, we just need to call it's selector inside the template.

Ex.

```typescript
    <div>
        <app-greeting></app-greeting>
    </div>
```
or
```typescript
    <div>
        <app-greeting />
    </div>
```

In the example above, the greeting component will be rendered in the view inside the `<app-greeting />` element as a web component as long as the greeting component is defined in a module or using the `customElement.define` function.

## Other web components

Web components that are not made using MonsterJS will also work inside a MonsterJS project.
We just need to register the web component's selector as a global component using `GlobalComponents` class found in the core package.

Ex.

```typescript
// src/index.ts
import { GlobalComponents } from '@monster-js/core';

const gc = new GlobalComponents();
gc.add('external-web-component');
gc.add('another-external-web-component');
```

It is recommended that we register the external components inside `src/index.ts` file.

## Component directives

To use directives inside a component we need to register the directives to the component using `@Directives` decorator.
After we register the directive, we can now use it inside the component's template.

Please see [Directives](./directives) for more information about directives.

Ex.

```typescript
import { Component, Directives } from '@monster-js/core';
import { HighlightDirective } from './highlight.directive';

@Directives(HighlightDirective)
@Component('app-greeting')
export class Greeting {
    render() {
        return <h1 highlight:color="red">Hello World!</h1>
    }
}
```

Directives can also be registered in a module so that it will be available to all the components registered in the module.

Please see [Module](./module#register-directives) for more information about registering directives into a module.

## Component pipes

To use pipes inside a component we need to register the pipes to the component using `@Pipes` decorator.
After we register the pipe, we can now use it inside the component's logic and template.

Please see [Pipes](./pipes) for more information about pipes.

Ex.

```typescript
import { Component, Pipes } from '@monster-js/core';
import { UppercasePipe } from './uppercase.pipe';

@Pipes(UppercasePipe)
@Component('app-greeting')
export class Greeting {

    greeting = 'Hello World!';

    render() {
        return <h1>{this.greeting | uppercase}</h1>
    }
}
```

To use the pipe inside the component's logic we can inject pipe into our component's constructor.

Ex.

```typescript
import { Component, Pipes } from '@monster-js/core';
import { UppercasePipe } from './uppercase.pipe';

@Pipes(UppercasePipe)
@Component('app-greeting')
export class Greeting {

    greeting = 'Hello World!';

    constructor(private uppercasePipe: UppercasePipe) {}

    uppercaseText(text: string) {
        return this.uppercasePipe.transform(text);
    }

    render() {
        return <h1>{this.uppercaseText(this.greeting)}</h1>
    }
}
```

Pipes can also be registered in a module so that it will be available to all the components registered in the module.

Please see [Module](./module) for more information about registering pipes into a module.

:::note
Template pipes may throw a typescript type checking error since the pipe operator is originally an arithmetic operator that accepts any, number and bigint values.
A temporary fix for this is to set our values to type any.
This error will be addressed in later releases.
:::

## component services

To use services inside a component we need to register the services to the component using `@Services` decorator.
After we register the service, we can now use it inside the component's logic and view.

Please see [Services](./services) for more information about services.

Ex.

```typescript
import { Component, Services } from '@monster-js/core';
import { GreetingService } from './greeting.service';

@Services(GreetingService)
@Component('app-greeting')
export class Greeting {

    constructor(private greetingService: GreetingService) { }

    render() {
        return <h1>{this.greetingService.getMessage()}</h1>
    }
}
```

Services can also be registered in a module so that it will be available to all the components registered in the module.

Please see [Module](/docs/module) for more information about registering services into a module.