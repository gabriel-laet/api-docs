## All Packages

Useful to get a list of all packages from a shop.

Request example:

```graphql
query {
  allPackages(shopId: 10, product: presto) {
    edges {
      node {
        pk
        status
        orderId
        orderStatus
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "allPackages": {
      "edges": [
        {
          "node": {
            "pk": 80456,
            "status": null,
            "orderId": 33860,
            "orderStatus": "dropped"
          }
        },
        {
          "node": {
            "pk": 80455,
            "status": null,
            "orderId": 33859,
            "orderStatus": "dropped"
          }
        }
      ]
    }
  }
}
```

#### NOTES:

- ```shopId``` can be obtained through a call to the ```all-shops``` endpoint.
