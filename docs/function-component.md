---
id: function-component.md
title: Function component
sidebar_label: Function component
slug: /function-component
---

Function components is the same as class component but it allow us to create components using functions instead of classes.
This type of component can still use all the functionalities of a class component but in different implementation.

## Logic and template

The same as the class component the logic and template is combined in a single file.
Instead of using the `@Component` decorator, it uses the `fnComponent` function from the core package to mark the function as a component and set it's selector.

Ex.

```typescript
import { fnComponent } from "@monster-js/core";

function Greeting() {
    return <h1>Hello World!</h1>
}

export default fnComponent('app-greeting', Greeting);
```

There are three parameters in `fnComponent`.
First is the component selector and second is the function component and third is an optional parameter which is a configuration of the component where we can register the services, directives, pipes, and other configurations.

## Styles

The same as class component, styles is imported directly to the `.component.tsx` file.

Ex.

```typescript
import './greeting.styles.scss';
import { fnComponent } from "@monster-js/core";

function Greeting() {
    return <h1>Hello World!</h1>
}

export default fnComponent('app-greeting', Greeting);
```

## Shadow dom component

To use shadow dom in our function component, we just need to pass `shadowMode` property to the third parameter of the `fnComponent` function.
The possible values of `shadowMode` are `open` and `closed`.

Ex.

```typescript
import { fnComponent } from "@monster-js/core";

function Greeting() {
    return <h1>Hello World!</h1>
}

export default fnComponent('app-greeting', Greeting, {
    shadowMode: 'closed'
});
```

## Web component slots

Web component slots in function component has the same implementation with the [class component](./component#shadow-dom-component).

## Custom element component

To create a custom element in function component, we can pass the `customElement` property in the `fnComponent` config.
The `customElement` property is an object with two required properties, the `superClass` which is the custom element constructor and `extends` which is the type of element it will extend.

Ex.

```typescript
import { fnComponent } from "@monster-js/core";

function CustomButton() {
    return <span>Click Me</span>
}

export default fnComponent('app-custom-button', CustomButton, {
    customElement: {
        superClass: HTMLButtonElement,
        extends: 'button'
    }
});
```

Now we can attach this component to the parent component `<button />` element.

Ex.

```typescript
<button is="app-custom-button"></button>
```

## Component directives

To use directives in function component, we need to pass the directives to the third parameter of `fnComponent`.

Please see [Directives](./directives) for more information about directives.

Ex.

```typescript
import { fnComponent } from '@monster-js/core';
import { HighlightDirective } from './highlight.directive';

function Greeting() {
    return <h1 highlight:color="red">Hello World!</h1>
}

export default fnComponent('app-greeting', Greeting, {
    directives: [HighlightDirective]
});
```

## Component pipes

To use pipes in function component, we need to pass the pipes to the third parameter of `fnComponent`.

Please see [Pipes](./pipes) for more information about pipes.

Ex.

```typescript
import { fnComponent, Pipes } from '@monster-js/core';
import { UppercasePipe } from './uppercase.pipe';

function Greeting() {
    const greeting = 'Hello World!';
    return <h1>{greeting | uppercase}</h1>
}
export default fnComponent('app-greeting', Greeting, {
    pipes: [UppercasePipe]
});
```

To use the pipe inside the function component's logic we can inject the pipe using `fnComponent`.

Ex.

```typescript
import { fnComponent, Pipes } from '@monster-js/core';
import { UppercasePipe } from './uppercase.pipe';

function Greeting({ uppercase }) {
    const greeting = 'Hello World!';

    const uppercaseText = (text: string) => {
        return uppercase.transform(text);
    }

    return <h1>{uppercaseText(greeting)}</h1>
}
export default fnComponent('app-greeting', Greeting, {
    pipes: [UppercasePipe],
    inject: {
        uppercase: UppercasePipe
    }
});
```

## Component services

To use services inside a function component we need to register the services to the component using `fnComponent`.
After we register the service, we can now use it inside the component's logic and view.

Please see [Services](./services) for more information about services.

Ex.

```typescript
import { fnComponent, Services } from '@monster-js/core';
import { GreetingService } from './greeting.service';

function Greeting({ greeting }) {
    return <h1>{greeting.getMessage()}</h1>
}

export default fnComponent('app-greeting', Greeting, {
    inject: {
        greeting: GreetingService
    }
});
```
