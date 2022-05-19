---
id: http.md
title: Http
sidebar_label: Http
slug: /http
---

This package helps MunsterJS applications to communicate with a server using http protocol.
This package is a wrapper of fetch api built for MunsterJS applications.

## Installation

We can install the store to our project using npm or yarn.

Ex.

```bash
npm install @munster-dev/http
```
or
```bash
yarn add @munster-dev/http
```

## Http interceptor

Http interceptor is a way to intercept and modify the request config of every http request.

The following code is an example of a working http interceptor codes but without functions yet.

```typescript
import { Service } from '@munster-dev/core';
import { BaseHttpInterceptor } from '@munster-dev/http';

@Service()
export class HttpInterceptor extends BaseHttpInterceptor {
}
```

### Set request base url

Setting a base url is helpful for us not to type again the base url of the server each time we make a request in the service.
It can also make our code cleaner since we do not need to type long urls on our services.

Ex.

```typescript
import { Service } from '@munster-dev/core';
import { BaseHttpInterceptor } from '@munster-dev/http';

@Service()
export class HttpInterceptor extends BaseHttpInterceptor {
    override baseUrl = 'http://localhost:4001/api/v1';
}
```

### Modify request config

We can also modify the request config of fetch api before being sent to the server.

Ex.

```typescript
import { Service } from '@munster-dev/core';
import { BaseHttpInterceptor } from '@munster-dev/http';

@Service()
export class HttpInterceptor extends BaseHttpInterceptor {
    override modifyConfig(config: RequestInit): RequestInit {
        config.body = {
            greeting: 'Hello World!'
        };
        return config;
    }
}
```

### Set request header

We can use the `setHeader` method provided by `BaseHttpInterceptor` to set a request header in http interceptor.

Ex.

```typescript
import { Service } from '@munster-dev/core';
import { BaseHttpInterceptor } from '@munster-dev/http';

@Service()
export class HttpInterceptor extends BaseHttpInterceptor {
    override modifyConfig(config: RequestInit): RequestInit {
        this.setHeader(config, 'Authorization', `Bearer some-token`);
        return config;
    }
}
```

## Http interceptor module

After we build the Http interceptor we need to create a module we can import to a module that needs the http interceptor.

Ex.

```typescript
import { Module, BaseModule } from '@munster-dev/module';
import { HttpClient } from '@munster-dev/http';
import { HttpInterceptor } from './http-interceptor.service';

@Module({
    exports: {
        services: [
            HttpInterceptor,
            { service: HttpClient, config: HttpInterceptor }
        ]
    }
})
export class HttpInterceptorModule extends BaseModule {}
```

Notice that we exported the `HttpInterceptor` and `HttpClient` as a service and pass the HttpInterceptor as a config for HttpClient.

## Http verbs

Once `HttpClient` is available in our module or component we can now start sending request using the different http verbs or methods.
Http supports different http verbs like GET, POST, PUT, PATCH, and DELETE.

### Get request

```typescript
import { Service } from '@munster-dev/core';
import { HttpClient, ResponseInterface } from '@munster-dev/http';

interface PostInterface {
    id: number;
    content: string;
}

@Service()
export class PostService {
    constructor(private http: HttpClient) {}

    getAll(): Promise<ResponseInterface<PostInterface[]>> {
        return this.http.get<PostInterface[]>('/get-all');
    }
}
```

### Post request

```typescript
import { Service } from '@munster-dev/core';
import { HttpClient, ResponseInterface } from '@munster-dev/http';

interface PostInterface {
    id: number;
    content: string;
}

@Service()
export class PostService {
    constructor(private http: HttpClient) {}

    create(post: PostInterface): Promise<ResponseInterface<PostInterface>> {
        return this.http.post<PostInterface>('/create', post);
    }
}
```

### Put request

```typescript
import { Service } from '@munster-dev/core';
import { HttpClient, ResponseInterface } from '@munster-dev/http';

interface PostInterface {
    id: number;
    content: string;
}

@Service()
export class PostService {
    constructor(private http: HttpClient) {}

    update(post: PostInterface): Promise<ResponseInterface<PostInterface>> {
        return this.http.put<PostInterface>('/update/' + post.id, post);
    }
}
```

### Patch request

```typescript
import { Service } from '@munster-dev/core';
import { HttpClient, ResponseInterface } from '@munster-dev/http';

interface PostInterface {
    id: number;
    content: string;
}

@Service()
export class PostService {
    constructor(private http: HttpClient) {}

    update(id: number, content: string): Promise<ResponseInterface<PostInterface>> {
        return this.http.patch<PostInterface>('/update/' + id, { content });
    }
}
```

### Delete request

```typescript
import { Service } from '@munster-dev/core';
import { HttpClient, ResponseInterface } from '@munster-dev/http';

@Service()
export class PostService {
    constructor(private http: HttpClient) {}

    delete(id: number): Promise<ResponseInterface<void>> {
        return this.http.delete<void>('/delete/' + id);
    }
}
```