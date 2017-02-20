# Quick GraphQL tips

Explore and try Loggi API with the GraphiQL interface below. There is a link **Docs** above (in top left corner) to the interface where you can navigate and search for specifications.

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

In the following sub sections, all examples will contain only the minimum data necessary for a successful response.

You must read (hack) the specs in GraphQL Docs to understand in details the purpose of each field available in queries and mutations.