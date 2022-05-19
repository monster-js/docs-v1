---
id: navigate.md
title: Navigate
sidebar_label: Navigate
slug: /navigate
---

Navigate allows us to redirect to a route programmatically.

## Register the plugin

Navigate plugin needs to be registered in a module before we can use it.
To register this plugin we just need to pass it to the plugins array of a module.

After the this plugin is registered to the module.
All Components under the module will now have the `this.$navigate` method.

Here's an example on how to register this plugin:

```javascript
import { Module, Navigate } from 'munster';

export class RootModule extends Module {
  plugins = [
    Navigate
  ];
}
```

## Navigate programmatically

Here's an example on how to navigate to a route programmatically:

```javascript
<template>
    ...
</template>

<script>
export default class SampleComponent {
    btnClick() {
        this.$navigate('/route/path');
    }
}
</script>
```

## Navigate parameters

Navigate has three parameters, first is the url, second is the state and third is the title.
The second and third parameters are optional.

For more information on url, state and title please follow this link at [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState).
