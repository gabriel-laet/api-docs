# Cancel an order

TODO (sec) Disable features of order edit from public mutation.

## Allocating order

When an order is allocating the user can cancel it without be charged.

Request example:

```graphql
mutation {
  cancelOrder(input: {
    id: 1000
    clientMutationId: "test_cancel"
  }) {
    success
    order {
      status
    }
  }
}
```

Response example:

```
{
  "data": {
    "cancelOrder": {
      "success": true,
      "order": {
        "status": "cancelled"
      }
    }
  }
}
```
