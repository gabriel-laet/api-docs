# Rating an order


Give a rating for an order. The value range from 0 (worst) to 5 (best).

Remember that only the user who made the order can rate. If another user try to rate it, an error will return in `errors.message`.

```graphql
mutation {
  ratingOrder(input: {
    order: 763
    rating: 5
    notes: "Tell us your experience!"
    clientMutationId: "rating_order"
  }) {
    success
    order {
      rating
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
    "ratingOrder": {
      "success": true,
      "order": {
        "rating": 5
      }
    }
  }
}
```
