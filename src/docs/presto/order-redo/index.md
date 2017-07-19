# Order Redo

When an order is dropped, it's possible to redoit by calling the mutation `orderRedo`.

This mutation receives the `id` of a droped order and a `clientMutationId`.

Request example:

```graphql
mutation {
  redoOrder(input: {id: 2, clientMutationId: "loggi"}) {
    success
    order {
      id
      pk
      status
      packages {
        pk
        status
        statusCode
        statusCodeDisplay
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "redoOrder": {
      "success": true,
      "order": {
        "id": "T3JkZXJOb2RlOjM=",
        "pk": 3,
        "status": "allocating",
        "packages": [
          {
            "pk": 1,
            "status": "allocating",
            "statusCode": 1,
            "statusCodeDisplay": "Agendado"
          }
        ]
      }
    }
  }
}
```