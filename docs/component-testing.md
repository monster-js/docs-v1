---
id: component-testing.md
title: Component testing
sidebar_label: Component testing
slug: /component-testing
---

Testing our MonsterJS components can help us check that our components are working properly.
MonsterJS provides a testing tools found in `@monster-js/tester` package.
These tools can help us validate that all our components are performing as expected.

## Installation

To install this package we just need to run the following command:

```bash
npm install --save-dev @monster-js/tester
```

Now we can use the following testing tools provided by the package.

## createTester

`import { createTester } from '@monster-js/tester'`

The `createTester` function helps us to create a tester instance based on the provided component.

Ex.

```typescript
import { Greeting } from './greeting.component';
import { createTester } from '@monster-js/tester';

const tester = createTester(Greeting);
```

The `createTester` function has two arguments.
First is the component that we want to create a tester instance and second is an optional argument which is an object that has the following properties.

| Property | Type | Description |
| --- | --- | --- |
| components | Array | Array of components we want to define. |
| externalComponents | Array | Array of component selectors which we want our test to treat as external components. |

Ex.

```typescript
import { Greeting } from './greeting.component';
import { GreetingChild } from './greeting-child.component';
import { createTester } from '@monster-js/tester';

const tester = createTester(Greeting, {
    components: [GreetingChild],
    externalComponents: ['app-external-component']
});
```

Child components that are not needed to be tested can be registered as external component.

## tester.createComponent

After creating a tester instance, we can now call the `createComponent` method to build the component and return an object that contains the following properties.

| Property | Type | Description |
| --- | --- | --- |
| host | HTMLElement | The host element of the component. Can be converted to component using `parseComponent` function. |
| element | HTMLElement | The DOM element version of the component's template. |
| component | Object | The component instance. |
| shadowRoot | Object | The shadow root of a shadow dom component. |

Ex.

```typescript
import { Greeting } from './greeting.component';
import { createTester } from '@monster-js/tester';

const tester = createTester(Greeting);

it('should create a component', function() {
    const { host, element, component, shadowRoot } = tester.createComponent();
    expect(host).toBeTruthy();
    expect(element).toBeTruthy();
    expect(component).toBeTruthy();
    expect(shadowRoot).toBeTruthy();
});
```

## parseComponent

`import { parseComponent } from '@monster-js/tester'`

This will convert an element to component and return an object that has the same structure as the one returned by the `tester.createComponent` method.
If the element is not a component, it will throw an error.

Ex.

```typescript
import { Greeting } from './greeting.component';
import { GreetingChild } from './greeting-child.component';
import { createTester, parseComponent } from '@monster-js/tester';

const tester = createTester(Greeting, {
    components: [GreetingChild]
});

it('should have the child component', function() {
    const greeting = tester.createComponent();
    const childElement = greeting.element.querySelector('app-greeting-child');
    const { host, element, component, shadowRoot } = parseComponent(childElement);
    expect(host).toBeTruthy();
    expect(element).toBeTruthy();
    expect(component).toBeTruthy();
    expect(shadowRoot).toBeTruthy();
});
```

## render

`import { render } from '@monster-js/tester'`

This will render the component that is already defined using `customElement.define` and return an object that has the same structure as the one returned by the `tester.createComponent` method.

Ex.

```typescript
import { Greeting } from './greeting.component';
import { GreetingChild } from './greeting-child.component';
import { createTester, render } from '@monster-js/tester';

const tester = createTester(Greeting, {
    components: [GreetingChild]
});

it('should be able to render child component', function() {
    const { host, element, component, shadowRoot } = render(GreetingChild);
    expect(host).toBeTruthy();
    expect(element).toBeTruthy();
    expect(component).toBeTruthy();
    expect(shadowRoot).toBeTruthy();
});
```

## fireEvent

`import { fireEvent } from '@monster-js/tester'`

This will fire an event of an an element like click, dblclick, input and other events.

Ex.

```typescript
import { fireEvent, createTester } from '@monster-js/tester';
import { Counter } from 'counter.component';

const tester = createTester(Counter);

it('should increment the counter when button is clicked', function() {
    const { element } = tester.createComponent();
    const btn = element.querySelector('button');
    const span = element.querySelector('.count-holder');
    fireEvent(btn, 'click')
    expect(span.textContent).toBe('1');
});
```

The `fireEvent` function has the following arguments.

| Parameter | Type | Description |
| --- | --- | --- |
| element | Element | That target html element of the event we want to fire. |
| eventType | Element | That target html element of the event we want to fire. |

## inputText

`import { inputText } from '@monster-js/tester'`

The `inputText` function allows us to emulate a user typing into an input box.

Ex.

```typescript
import { inputText, createTester } from '@monster-js/tester';
import { Counter } from 'counter.component';

const tester = createTester(Counter);

it('should display the inputted text to text holder', function() {
    const { element } = tester.createComponent();
    const input = element.querySelector('input');
    const span = element.querySelector('.text-holder');
    inputText(input, 'Hello World');
    expect(span.textContent).toBe('Hello World');
});
```

If it has only two arguments the function is synchronous and asynchronous if it has a third argument which is the input delay in milliseconds.

Ex.

```typescript
import { inputText, createTester } from '@monster-js/tester';
import { Counter } from 'counter.component';

const tester = createTester(Counter);

it('should display the inputted text to text holder', async function() {
    const { element } = tester.createComponent();
    const input = element.querySelector('input');
    const span = element.querySelector('.text-holder');
    await inputText(input, 'Hello World', 100);
    expect(span.textContent).toBe('Hello World');
});
```

The arguments of `inputText(element, text, delay)` are the following.

| Argument | Type | Description |
| --- | --- | --- |
| element | Element | The element where the text should be inputted. |
| text | string | The text that will be inputted in the element. |
| delay | number | The delay of the input event for the next character when typing. |

## mockInjection

`import { mockInjection } from '@monster-js/tester'`

This function allows us to replace injected classes to anything we want.
This will help us handle some logic where some codes are not available for testing.

A good example for this is a service that has methods that sends requests to a backend server.
We don't want our test creating or modifying data into our database.
So we use a mock for this scenario.

Ex.

```typescript
import { Greeting } from './greeting.component';
import { GreetingService } from './greeting.service';
import { createTester, mockInjection } from '@monster-js/tester';

const tester = createTester<Greeting>(Greeting);

it('should display message from mock service', function() {
    mockInjection(Greeting, GreetingService, {
        getMessage: () => 'Mock Service Message'
    });
    const { element } = tester.createComponent();
    expect(element.textContent).toBe('Mock Service Message');
});
```

In the example above we created a mock service of `GreetingService` so that every time we call the method `getMessage` of the service we call the `getMessage` from the mock object instead.
The `mockInjection` function will work on any class injected to the component and not just for services.

The `mockInjection` has three arguments.
First is the component, second is the injected class, and third is the mock object.

## clearInjectionMocks

`import { clearInjectionMocks } from '@monster-js/tester'`

This function allows us to remove all the mock data in our dependency injection container made by `mockInjection` function.

```typescript
import { Greeting } from './greeting.component';
import { clearInjectionMocks } from '@monster-js/tester';

it('should be able to test from original service', function() {
    clearInjectionMocks(Greeting);
    ...
});
```

This function has one argument, the component which we want to clear its mock data.
