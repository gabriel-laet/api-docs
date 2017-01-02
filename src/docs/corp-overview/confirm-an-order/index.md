# Confirm an order

An order is created when confirm an [inquiry](/corp-overview/generate-a-quote). You must be [logged in](/other-resources/authorization) to execute queries and mutations for orders.

The input `inquiry` should be the value in `inquiry.pk` and `paymentMethod` should be the value of `pk` in one of the payment result in [allPaymentMethods](/other-resources/payment) query.

Example:

```graphql
mutation {
  confirmOrder(input: {
    inquiry: "eaf6907e-9bb3-11e6-8b2e-0242ac110004"
    paymentMethod: 1
    clientMutationId: "confirm_order"
  }) {
    success
    order {
      pk
      status
    }
    errors {
      field
      message
    }
  }
}
```

Response example:

```
{
  "data": {
    "confirmOrder": {
      "success": true,
      "order": {
        "pk": 761,
        "status": "allocating"
      },
      "errors": []
    }
  }
}
```