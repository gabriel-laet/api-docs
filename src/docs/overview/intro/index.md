# Intro - Welcome to Loggi GraphQL API


Explore and try Loggi API with GraphiQL interface below. There is a link **Docs** above the interface where you can navigate and search for specifications.


There are examples in this doc for all queries and mutations available to integration.


All the topics in **Overview** apply to the product Pro. Documentation for Loggi Pro API [here](http://api.docs.dev.loggi.com/spec/).


Already have an integration with our Restful API? Old documentation can be found [here](http://api.docs.dev.loggi.com/). 


Any doubts, please contact us at [dev@loggi.com](mailto:dev@loggi.com).

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
