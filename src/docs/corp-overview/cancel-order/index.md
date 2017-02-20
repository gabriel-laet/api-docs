# Cancel an order

## Allocating order

When an order is allocating, the user can cancel it without charge.

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
