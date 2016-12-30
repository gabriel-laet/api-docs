# TODO (fcm) Select first option in left menu.

# Welcome to Loggi

This document describes how to integrate with Loggi and enjoy the best of our on demand last mile delivery service over API.

About the technologies evolved, is desired a previous basic knowledge in HTTP protocol and [GraphQL](http://graphql.org/docs/intro/) *(query language)*. If you are a developer and has some doubts, please, check our [FAQ](#).

In case of you not found some important information or have a behavior different from the documentation that makes success impossible, [contact us](#).


## Services



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

