# API documentation - City


List all available cities.

Example:

```graphiql
query {
  allCities {
    edges {
      node {
        pk
        slug
        name
      }
    }
  }
}
```
