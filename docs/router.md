---
id: router.md
title: Router
sidebar_label: Router
slug: /router
---

Router is a plugin that enables developers to build a single page application with multiple components that acts as different pages of the app.
View changes depending on the activated route.
Activated routes depends on the url of the browser and the path registered in the route component.

## Installation

We can install the router using npm or yarn.

Ex.

```bash
npm install @monster-js/router
```
or
```bash
yarn add @monster-js/router
```

## Register the router module

Router must be registered to the module first before we can use it.
We can register the individual apis or register the whole router module to the module where we want to use the router.

Here's an example on how to register the router module:

```typescript
import { Module, BaseModule } from '@monster-js/module';
import { RouterModule } from '@monster-js/router';

@Module({
    modules: [RouterModule]
})
export class AppModule extends BaseModule { }
```

## Creating a route

`import { Route } from '@monster-js/router'`

Route is just a component provided by the router package.
Once route component is already defined or the router module is imported to the module we can now start using the `app-route` component inside our components.

Ex.

```typescript
import { Component } from '@monster-js/core';
import { Greeting } from './greeting.component';

@Component('app-root')
export class Root {
    render() {
        return <div>
            <app-route
                prop:path="/greeting"
                prop:component={Greeting}
            />
        </div>
    }
}
```

In the example above, if the user will navigate to '/greeting' route the `Greeting` component will be displayed in the view.

## Route props

Route props are properties of the route that controls the behavior of the route.

Here are the available props that can be used in a route.

| Props | Description |
| --- | --- |
| path | The path that should match in the browser url pathname before the route is activated. |
| component | The component that will be rendered inside the `<app-route />` when route path matches the browser url pathname. |
| exact | If the value is true, then the Component will only activate if route path is an exact match with the browser url pathname but still respect the dynamic route matching. |
| guards | It is another layer of checking if the component can activate or deactivate. |
| module | Loads a module on demand and display it's root component to the view if route path matches the browser url pathname. |
| redirect-to | A string url to redirect to if route path matches the browser url pathname. |

## Router directive

`import { RouterDirective } from '@monster-js/router'`

Router also has a directive that is very helpful when using a router.

### Router link

`router:link="<link>"`

Attach to an element to navigate to the link when the element is clicked.
If used in an `<a>` tag, it will automatically add the link as an `href` attribute.

Ex.

```typescript
<a router:link="/some/url">I am a link</a>
<button router:link="/some/url/123">I am a button</button>
```

### Router link active

`router:link-active="<class name>"`

This directive will add the `<class name>` to the class list of the element if it's `router:link` directive link matches the browser url pathname using dynamic matching.

Ex.

```typescript
<button
    router:link="/some/url/123"
    router:link-active="i-am-active"
>I am a button</button>
```

### Router link active exact

`router:link-active-exact={<boolean>}`

If the value is true, this directive will enable us to add the class name of `router:link-active` directive only when the `router:link` directive link is an exact match of the browser url pathname but still respect dynamic matching.

Ex.

```typescript
<button
    router:link="/some/url/123"
    router:link-active="i-am-active"
    router:link-active-exact={true}
>I am a button</button>
```

## Router guard

Router guard is another way to check if a component can activate or not.
It can also run a block of codes before a route can activate or deactivate.

The following code is an example of a working guard codes but without functions yet.

```typescript
import { Guard } from '@monster-js/router';

@Guard()
export class AuthGuard {
}
```

### Can activate

The `canActivate` method can help us add additional checking if a component is allowed to activate.

```typescript
import { Guard, RouterService } from '@monster-js/router';
import { AuthService } from './auth.service';

@Guard()
export class AuthGuard {

    constructor(
        private authService: AuthService,
        private routerService: RouterService
    ) {}

    public override canActivate(): Observable<boolean> | boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.routerService.navigate('/guest/route');
        return false;
    }
}
```

### Can deactivate

The `canDeactivate` method can help us add additional checking if a component is allowed to deactivate.

```typescript
import { Guard } from '@monster-js/router';
import { ChangesService } from './changes.service';

@Guard()
export class ChangesGuard {

    constructor(private changesService: ChangesService) {}

    public override canDeactivate(): Observable<boolean> | boolean {
        return !this.changesService.hasChanges;
    }
}
```

## Router module

`import { RouterModule } from '@monster-js/router';

Importing router module to our module will give us all the functionalities of the router since router module exports all the necessary elements to use the router.

```typescript
@Module({
    exports: {
        directives: [RouterDirective],
        services: [RouterService],
        components: [Route]
    }
})
export class RouterModule extends BaseModule {}
```

## Router service

`import { RouterService } from '@monster-js/router'`;

Router service will provide us some useful functionalities to control the route, get router data, and watch for events.

To use the router service we need to inject it to our component.

Ex.

```typescript
import { Component } from '@monster-js/core';
import { RouterService } from '@monster-js/router';

@Component('app-greeting')
export class Greeting {
    constructor(private routerService: RouterService) {}
    ...
}
```

### Navigate

Router service offers `navigate(url, state, title, replaceState)` method to navigate to a url programmatically.

Ex.

```typescript
import { Component } from '@monster-js/core';
import { RouterService } from '@monster-js/router';

@Component('app-greeting')
export class Greeting {
    constructor(private routerService: RouterService) { }

    onInit() {
        setTimeout(() => {
            this.routerService.navigate('/some/url');
        }, 1000);
    }
}
```

| Parameters | Description |
| --- | --- |
| url | The url that we want to navigate to. This parameter is required. |
| state | An object, used as the state in history.pushState api. This parameter is not required. |
| title | A string, used as the title in history.pushState api. This parameter is not required. |
| replaceState | A boolean, indicates if we use history.replaceState or history.pushState during navigation. |

### On route change

This will allow us to subscribe to route change event using `onRouteChange` property of the router service.

Ex.

```typescript
import { Component } from '@monster-js/core';
import { RouterService } from '@monster-js/router';

@Component('app-greeting')
export class Greeting {
    constructor(private routerService: RouterService) { }

    onInit() {
        this.routerService.onRouteChange.subscribe(() => {
            console.log('route has change');
        });
    }
}
```

In the example above, the component will log `route has change` in the console every time the route will change.

Since we subscribed to route change event, it is a good idea to remove all the subscriptions made when the component is destroyed to avoid memory leak.

Ex.

```typescript
import { Component, Subscription } from '@monster-js/core';
import { RouterService } from '@monster-js/router';

@Component('app-greeting')
export class Greeting {

    subscription: Subscription;

    constructor(private routerService: RouterService) { }

    onInit() {
        this.subscription = this.routerService.onRouteChange.subscribe(() => {
            console.log('route has change');
        });
    }

    onDestroy() {
        this.subscription.unsubscribe();
    }
}
```

### Router params

We can also get the router parameters using the router service.
More information about this route params are found in the [dynamic route matching](#dynamic-route-matching) section.

Ex.

```typescript
import { Component } from '@monster-js/core';
import { RouterService } from '@monster-js/router';

@Component('app-greeting')
export class Greeting {
    constructor(private routerService: RouterService) { }

    onInit() {
        const params = this.routerService.params;
        console.log(params);
    }
}
```

## Dynamic route matching

Dynamic route matching is a way to match a route path segment into its matching browser url pathname segment.
A dynamic segment is denoted by a colon `:` followed by the segment name. ex. `/:userId`.
The value of the dynamic segments are call the router parameters.

Here's a table of dynamic routes and its corresponding values as a router parameter:

| component path        | browser url pathname  | router params                 |
| ---                   | ---                   | ---                           |
| /:path                | /100                  | { path: 100 }                 |
| /user/:userId         | /user/123             | { userId: 123 }               |
| /post/:postId/:userId | /post/1/123           | { postId: 1, userId: 123 }    |























## Lazy loading a module

To lazy load a module or load a module on demand, we can use the `module` property of a route.

Ex.

#### The module

```typescript
// ./greeting.module
import { Module, BaseModule } from '@monster-js/module';
import { Greeting } from './greeting.component';

@Module({
    root: Greeting
})
export class GreetingModule extends BaseModule { }
```

#### The route

```typescript
<app-route
    prop:path="/sample/path"
    prop:module={() => import('./greeting.module').then(m => m.GreetingModule)}
/>
```

The example above will display the component registered as a root component in the `GreetingModule` when the route is allowed to activate.
