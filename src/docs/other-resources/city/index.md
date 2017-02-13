# City resources

TODO (sec) CityNode exposes `shopSet`, `inquiries`, `orders`, `itineraries`, `driverSet`, `pricing`

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
