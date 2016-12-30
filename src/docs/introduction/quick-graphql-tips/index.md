# Quick GraphQL tips

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
