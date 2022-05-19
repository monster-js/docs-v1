---
id: custom-pipes.md
title: Custom pipes
sidebar_label: Custom pipes
slug: /custom-pipes
---

Custom pipes allow us to create reusable transformers that can be used directly in the template or in logic of our components.

## Create a pipe

To create a custom pipe, we can use the [cli](./cli-what-is-cli) to automatically generate a pipe file with boilerplate codes or we can manually create a file and write the code from scratch.

The following code is an example of a working pipe codes but without functions yet.

```typescript
import { Pipe } from '@munster-dev/core';

@Pipe('lowercase')
export class LowercasePipe {
    transform(value, args) {
    }
}
```

In the example above, the `transform(value, args)` method will do the transformation and what ever this method returns will be the transformed data.

| Params | Description |
| --- | --- |
| value | The value to be transformed. |
| args | The parameters of the pipe when used in the template or in logic. |

Ex.

```typescript
import { Pipe } from '@munster-dev/core';

@Pipe('lowercase')
export class LowercasePipe {
    transform(value, args) {
        return value.toLowerCase();
    }
}
```
