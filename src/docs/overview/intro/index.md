# Welcome to Loggi

This document describes how to integrate with Loggi and enjoy the best of our on demand last mile delivery service over API.

About the technologies evolved, is desired a previous basic knowledge in HTTP protocol and [GraphQL](http://graphql.org/docs/intro/) *(query language)*. If you are a developer and has some doubts, please, check our [FAQ](#).

In case of you not found some important information or have a behavior different from the documentation that makes success impossible, [contact us](#).

## Introduction

In first of all, you need to setup a [configuration management](#) support in your application to turn on possible alternate between our sandbox (for tests) and production (real world) when you perform operations against Loggi API.

### Sandbox environment

Is maintained for development purposes, you can use as you go without be charged (because the service is not real). But, pay attention to details bellow:

 - no e-mails will be send.

> Entry-point: https://staging.loggi.com/

### Production environment

Is real world, all operations will be charged and service executed following the terms of contract.

> XXX (dev) Must we implement a ACL policy to protect production from undesired access?
> **Maybe, we will need to separate the api in a sub-domain.**

.
>  Entry-point: https://www.loggi.com/

### Getting access

A credential is dedicated to a determined environment, manage with prudential to avoid security failures or undesired invoices (e.g: because a developer asked a real ride in a test).

#### Create credential

To create a credential, logged into your account, access the desired environment using one option bellow and follow the page instructions.

 - For Sandbox: https://staging.loggi.com/contas/haxor/
 - For Production: https://loggi.com/contas/haxor/

#### HTTP

All services is hosted in path `/public-graphql` of HTTP verb `POST` as bellow:

```
> POST /public-graphql HTTP/1.1
> Host: staging.loggi.com
> Content-type: Content-Type: application/json;charset=UTF-8
> ApiKey a-valid-email@domain.ext:a-valid-token
```

> Important: Excluding login, all services is private and requires the usage of a HTTP Header called `ApiKey` that is composed as described above.

## Services

> TODO (design) Create a movie that demonstrate how is easy to use GraphQL API.

Explore and try Loggi API with GraphiQL interface below. There is a link Docs above (in left corn on top) the interface where you can navigate and search for specifications.



For example, bellow you can explore a search by cities available in platform:

```graphiql
query {
  allCities {
    edges {
      node {
        pk
        name
        slug
      }
    }
  }
}
```

In the following sub sections, all examples contains only the minimum data necessary to you experience a response with success.

You must read (hack) the specs in GraphQL Docs to understand in details the purpose of each field available in queries and mutations.


### Login

To authenticated, you need of a valid credential.

```graphiql
mutation {
  login(input:{
    email: "a-valid-email@domain.ext",
    token: "a-valid-credential",
  }) {
    user {
        api_key
    }
  }
}
```

The operation is considered with success when the user node from response has data. Then, you need to use field `api_key` in header for the next operations how described in authentication on conventions.

> TODO: (sec) Verify if this operation is allowed against brute force operations, after, inspect if UserNode has some sensitive data.

## Support

If you have a problem about a ongoing situation, [contact our customer experience department](#).

### FAQ

#### For developers

> **Witch programming language is compatible with Loggi API?**
> Programming languages that has support to HTTP works very well with Loggi.

> **TODO (po) Add clients to product road map.**.

> **I don't know [GraphQL](#)! What I need to do?**
> Watch [this 5 minutes tip (by Josh Black)](https://egghead.io/lessons/javascript-using-graphql-s-graphiql-tool), and follow to [official introduction](#).

> **I not found some important information (or have a behaviour different from the documentation)!**
> Contact us at [dev@loggi.com](mailto:dev@loggi.com), we will attend you as soon as possible.

## Disclaimer

All rights of API protocol is reserved to Loggi Tecnologia.

 - We reserve the rights to reset our Sandbox database any time!

> **FIXME: add legal policies, some topics of interest:**
>
>  - Security issues
>  - Architectural evolution







---------
---------
---------

# Intro - Welcome to Loggi GraphQL API


Explore and try Loggi API with GraphiQL interface below. There is a link **Docs** above the interface where you can navigate and search for specifications.


There are examples in this doc for all queries and mutations available to integration.


All the topics in **Overview** apply to the product Pro. Documentation for Loggi Pro API [here](http://api.docs.dev.loggi.com/spec/).


Already have an integration with our Restful API? Old documentation can be found [here](http://api.docs.dev.loggi.com/). 


Any doubts, please contact us at [dev@loggi.com](mailto:dev@loggi.com).

