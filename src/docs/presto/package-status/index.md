# Package Status

Useful to retrieve information on Order and Package status.

Request example:

```graphql
{"query": "query {packageOrder(packageId: 80455) {id pk status packages {pk status statusCode statusCodeDisplay} } }"}
```

Response example:

```
{
  "data": {
    "packageOrder": {
      "id": "T3JkZXJOb2RlOjMzODYw",
      "pk": 33860,
      "status": "allocating",
      "packages": [
        {
          "pk": 80455,
          "status": "allocating",
          "statusCode": 1,
          "statusCodeDisplay": "Agendado"
        }
      ]
    }
  }
}
```

#### NOTES:

- ```packageOrder.packageId``` can be obtained through a call to the ```create-retail-order``` endpoint (```shop.order.packages[].pk```).
