# Confirm an order

An order is created when an [inquiry](/corp-overview/generate-a-quote) is confirmed.

The input `inquiry` should be the value of `inquiry.pk`, and `paymentMethod` should be the value of `pk` from one of the payment result in [allPaymentMethods](/other-resources/payment) query.

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