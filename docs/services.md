---
id: services.md
title: Services
sidebar_label: Services
slug: /services
---

Services are injectable classes that are used to perform reusable logic.
This helps us to have much cleaner and easy to maintain components.
It is recommended that all http requests and business logic are made inside a service.

## Create a service

To create a service, we can use the [cli](./cli-what-is-cli) to automatically generate a service file with boilerplate codes or we can manually create a file and write the code from scratch.

The following code is an example of a working service codes but without functions yet.

```typescript
import { Service } from '@monster-js/core';

@Service()
export class GreetingService {

}
```

## Singleton service

Services is transient by default.
To create a singleton service, we need to pass an optional config to `@Service()` decorator.
The config is an object that contains a `singleton` property that is set to true.

Ex.

```typescript
import { Service } from '@monster-js/core';

@Service({ singleton: true })
export class GreetingService {

}
```

## Register service in component

Before we can use a service we need to register it in our component.

Ex.

```typescript
import { Component, Services } from '@monster-js/core';
import { GreetingService  } from './greeting.service';

@Services(GreetingService)
@Component('app-greeting')
export class Greeting {
    ...
}
```

Services can also have config that is received using the `onReceiveConfig` service hook after initialization.

Ex.

```typescript
import { Component, Services } from '@monster-js/core';
import { GreetingService } from './greeting.service';

@Services({
    service: GreetingService,
    config: { defaultMessage: 'Hello World!' }
})
@Component('app-greeting')
export class Greeting {
    ...
}
```

## Register service in module

If multiple components in a module are using the service it is recommended that we register the service in our module.
Services registered in a module will be available to all the components registered in the same module.

Ex.

```typescript
import { Module, BaseModule } from '@monster-js/module';
import { GreetingService } from './greeting.service';

@Module({
    services: [GreetingService]
})
export class GreetingModule extends BaseModule { }
```

Services can also have config that is received using the `onReceiveConfig` service hook after initialization.

Ex.

```typescript
import { Module, BaseModule } from '@monster-js/module';
import { GreetingService } from './greeting.service';

@Module({
    services: [
        {
            service: GreetingService,
            config: { defaultMessage: 'Hello World!' }
        }
    ]
})
export class GreetingModule extends BaseModule { }
```

## Register service in global

If we want our service to be available to all our components inside our application, we can also register the service as a global service.

Ex.

```typescript
import { Container, GlobalDataSource, registerService } from '@monster-js/core';
import { GreetingService, config } from './greeting.service';

const container = new Container(new GlobalDataSource());
registerService(GreetingService, container, config);
```

In the example above, we register the service using `registerService(GreetingService, container, config)` function.

| Params | Description |
| --- | --- |
| GreetingService | The service we want to register in global container |
| container | The global dependency injection container |
| config | An optional parameter. Any type of data that serves as a configuration of the service after initialization. Received using the `onReceiveConfig` service hook. |