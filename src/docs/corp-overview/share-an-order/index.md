# Share an order

Enable order notifications to other people by email or mobile.

Before the driver arrives at a point, you can specify for which `waypoint` to send the notification. To find this value, use  the query [`order`](/corp-overview/order-follow-up) and check the field `waypoints.pk` to get the list all possible points of an order.

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
