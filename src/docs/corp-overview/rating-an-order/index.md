# Rating an order


Give a rating for an order, value can be from 0 (worst) to 5 (best). 

Remember that only the user who ordered can rate. If other user try to rate, an error will return in `errors.message`.

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
