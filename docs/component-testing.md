---
id: component-testing.md
title: Component testing
sidebar_label: Component testing
slug: /component-testing
---

Testing our MonsterJS component can help us check that our component is working properly.
MonsterJS provides a testing tools found in `@monster-js/tester` package.
These tools can help us validate that all our components are performing as expected.

The following are the testing tools provided by the testing package.

## createTester

`import { createTester } from '@monster-js/tester'`

The `createTester` function helps us to create a tester instance based on the provided component.

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

After creating a tester instance, we can now call the `createComponent` method to build the component and return an object that contains the following properties.

| Property | Type | Description |
| --- | --- | --- |
| host | HTMLElement | The host element of the component. Can be converted to component using `parseComponent` function. |
| element | HTMLElement | The DOM element version of the component's template. |
| component | Object | The component instance. |
| shadowRoot | Object | The shadow root of a shadow dom component. |

## render

This will render the component that is already defined using `customElement.define` and return an object that has the same structure as the one returned by the `tester.createComponent` method.

## parseComponent
## fireEvent
## inputText
## mockInjection
## clearInjectionMocks
