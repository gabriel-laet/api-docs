# API documentation - Share


Mutation to notify an order with other person by email or mobile.

Before driver arrive at a point, you can pass in field `waypoint` the `waypoint.pk` of a specific point. To find this id, use query [`order`](../corp/order) and check field `waypoints.pk` to list all possible points of an order.

```graphql
mutation {
  createSharedWaypoint(input: {
    waypoint: 7672
    email: "test_notify@loggi.com"
    mobile: "11999999999"
    clientMutationId: "test_share_waypoint"
  }) {
    success
    shared {
      mobile
      email
    }
    clientMutationId
  }
}
```

Response example:

```
{
  "data": {
    "createSharedWaypoint": {
      "success": true,
      "shared": {
        "mobile": "11999999999",
        "email": "test_notify@loggi.com"
      },
      "clientMutationId": "test_share_waypoint"
    }
  }
}
```
