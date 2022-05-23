---
id: store.md
title: Store
sidebar_label: Store
slug: /store
---

Store is a state management built for MonsterJS framework.
Using this store will help developers to centralize and maintain the codes easily.

## Installation

We can install the store to our project using npm or yarn.

Ex.

```bash
npm install @monster-js/store
```
or
```bash
yarn add @monster-js/store
```

## Register the store

Store needs to be registered as a service before we can use it.
Please check the [services](./services) for information on how to register a service.

It is recommended that we register the store in the global container.

Ex.

```typescript
import { Container, GlobalDataSource, registerService } from '@monster-js/core';
import { Store } from '@monster-js/store';

const storeConfig = {
    state: {}
};

const container = new Container(new GlobalDataSource());
registerService(Store, container, storeConfig);
```

In the example above, the `storeConfig` is the initial state of the store.

## Initial state

Initial state of the store is the state that is passed to the store as the initial data.
The initial state is required when registering the store.

Here's an example on how to create an initial state:

```javascript
// initial-state.ts
import { StoreInterface } from "@monster-js/store";

export interface InitialStateInterface {
    count: number;
}

export const initialState: StoreInterface<InitialStateInterface> = {
    state: {
        count: 0
    }
}
```

After creating an initial state, we need to pass it as a service config for the store.

```typescript
import { Container, GlobalDataSource, registerService } from '@monster-js/core';
import { Store } from '@monster-js/store';
import { initialState } from './initial-state';

const container = new Container(new GlobalDataSource());
registerService(Store, container, initialState);
```

## Setter

When we set a new value to state of store.
The change will be reflected to the components that has a subscription to this state.

Ex.

```javascript
import { Component } from '@monster-js/core';
import { Store } from '@monster-js/store';
import { InitialStateInterface } from './initial-state';

@Component('app-greeting')
export class Greeting {
    constructor(private store: Store<InitialStateInterface>) {}

    btnClick() {
        this.store.set('count', 100);
    }
    ...
}
```

## Getter

To get a value from store, the we can call the store `get` method.

Ex.

```javascript
import { Component } from '@monster-js/core';
import { Store } from '@monster-js/store';
import { InitialStateInterface } from './initial-state';

@Component('app-greeting')
export class Greeting {
    constructor(private store: Store<InitialStateInterface>) {}

    onInit() {
        console.log(this.store.get('count'));
    }
    ...
}
```

## Subscribe to changes

Store also offers a way to subscribe for changes of each item of the state.

Ex.

```javascript
import { Component } from '@monster-js/core';
import { Store } from '@monster-js/store';
import { InitialStateInterface } from './initial-state';

@Component('app-greeting')
export class Greeting {

    constructor(private store: Store<InitialStateInterface>) {}

    onInit() {
        this.store.select('count').subscribe(state => {
            console.log(state);
        });
    }
    ...
}
```

#### Unsubscribe to store

All subscriptions must be unsubscribe when the component is destroyed or else it will cause a memory issue.

Ex.

```javascript
import { Component, Subscription } from '@monster-js/core';
import { Store } from '@monster-js/store';
import { InitialStateInterface } from './initial-state';

@Component('app-greeting')
export class Greeting {
    subscription: Subscription;
    constructor(private store: Store<InitialStateInterface>) {}

    connectedCallback() {
        this.subscription = this.store.select('count').subscribe(state => {
            console.log(state);
        });
    }

    disconnectedCallback() {
        this.subscription.unsubscribe();
    }
    ...
}
```

## Actions

Actions can also be used to update the state.
Using this can make your codes much cleaner and easy to manage.

#### Create actions

Here's an example on how to create an action:

```typescript
import { createAction } from '@monster-js/store';

interface PostInterface {
    likesCount: number;
    commentsCount: number;
}

interface InitialStateInterface {
    post: PostInterface;
}

export const setPostLikesCount = createAction<number, PostInterface>('[Post] set likes count', (state: PostInterface, payload: number) => {
    return {
        ...state,
        likesCount: payload
    }
});

export const initialState: StoreInterface<InitialStateInterface> = {
    state: {
        post: {
            likesCount: 0,
            commentsCount: 0
        }
    },
    actions: {
        post: [
            setPostLikesCount // <--- action needs to be registered here
        ]
    }
}
```

In the `createAction`, there are two generic types.
First is the type of data that `setPostLikesCount` action will accept.
The second type is the type of the post state inside the store.

There are two parameters for the `createAction` function.
Fist is a string that describes the action.
Second is the reducer function that returns the new state of the selected store.

The reducer function has two arguments.
First is the state which holds the current state of the store.
Second is the payload which holds the value that is passed to the `setPostLikesCount` action when the action is called.

#### Dispatch an action

Here's an example on how to dispatch the created action above:

```typescript
import { Component } from '@monster-js/core';
import { Store } from '@monster-js/store';
import { InitialStateInterface, setPostLikesCount } from './initial-state';

@Component('app-greeting')
export class Greeting {

    constructor(private store: Store<InitialStateInterface>) {}

    btnClick() {
        this.store.action(setPostLikesCount(100));
    }
}
```
