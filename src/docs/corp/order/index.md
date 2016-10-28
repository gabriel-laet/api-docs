# API documentation - Order


### Create an order


An order is created when confirm an [inquiry](../corp/inquiry). You must be [logged in](../corp/user) to execute queries and mutations for orders.

The input `inquiry` should be the value in `inquiry.pk` and `paymentMethod` should be the value of `pk` in one of the payment result in [allPaymentMethods](../corp/payment) query.

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

### Search orders

Request information about all orders in the last 5 hours.

We can check the status of each order:

- allocating: Waiting for a driver;
- accepted: Driver accepted, going to first point;
- started: Driver arrived at least in the first point;
- finished: Order finished, driver checked out the last point;
- waiting_slo: If slo selected in order is 2 (Smart), the order will wait for other orders to bundle;
- dropped: No driver available in 20 minutes after order created.

Example:

```graphql
query {
  searchOrders(term: "Customer name", status: in_progress) {
    edges {
      node {
        pk
        status
        driver {
          fullName
        }
        created
        currentDriverPosition {
          lat
          lng
          bearing
        }
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "searchOrders": {
      "edges": [
        {
          "node": {
            "pk": 111,
            "status": "started",
            "driver": {
              "fullName": "Roberto Martins"
            },
            "created": 1477673466,
            "currentDriverPosition": {
              "lat": -23.548404777225816,
              "lng": -46.685474540313365,
              "bearing": 2.3329146956837743
            }
          }
        },
        {
          "node": {
            "pk": 112,
            "status": "started",
            "driver": {
              "fullName": "Mauricio Mada"
            },
            "created": 1477673032,
            "currentDriverPosition": {
              "lat": -23.519180308680067,
              "lng": -46.782818496862305,
              "bearing": -1.3504733431135183
            }
          }
        },
        {
          "node": {
            "pk": 113,
            "status": "started",
            "driver": {
              "fullName": "Benedito Bispo"
            },
            "created": 1477671874,
            "currentDriverPosition": {
              "lat": -23.5224999,
              "lng": -46.73660699999999,
              "bearing": 1.5707963267948966
            }
          }
        },
```

### Order details

After confirmed an order, it's possible to get information about it. Input `id` will be the result of `order.pk`: 

```graphql
{
  order(id: 750) {
    status
    distance
    customer {
      fullName
    }
    pricing {
      totalCm
    }
    paymentMethod {
      name
      cardType
    }
    orderReceipt
    created
    started
    finished
    slo
    rating
    pointsBeforeDeliver
    waypoints {
      addressDisplay
      waitTime
      overTime
      instructions
      shareds {
        email
        mobile
      }
      checkin
      checkout
      ack {
        signatureFileUrl
        unavailableSignatureUrl
        signedByName
        signedByDocument
      }
      isFavorite
    }
    driver {
      fullName
      photoUrl {
        default
      }
      mobile1
    }
  }
}
```

Response example:

```
{
  "data": {
    "order": {
      "status": "finished",
      "distance": 20730,
      "customer": {
        "fullName": "Admin Local"
      },
      "pricing": {
        "totalCm": "46.57"
      },
      "paymentMethod": {
        "name": "Custo 1-0",
        "cardType": null
      },
      "orderReceipt": "/minhaloggi/recibos/750/",
      "created": 1477482444,
      "started": 1477482504,
      "finished": 1477482614,
      "slo": 1,
      "rating": 5,
      "pointsBeforeDeliver": 0,
      "waypoints": [
        {
          "addressDisplay": "Rua Major Paladino, 128, Vila Leopoldina, São Paulo, SP, 05307000",
          "waitTime": 45,
          "overTime": null,
          "instructions": "Get document for test.",
          "shareds": [
            {
              "email": null,
              "mobile": "11999992222"
            },
            {
              "email": "test_query@loggi.com",
              "mobile": null
            }
          ],
          "checkin": 1477482535,
          "checkout": 1477482581,
          "ack": {
            "signatureFileUrl": "http://s3-sa-east-1.amazonaws.com/loggi-development-media/packages/1857/10890/wp-7475-protocolo.png",
            "unavailableSignatureUrl": "http://static.development.loggi.com:8080/images/stable/e-receipt/bg-protocol-fail-temp.gif",
            "signedByName": null,
            "signedByDocument": null
          },
          "isFavorite": false
        },
        {
          "addressDisplay": "Rua Fernando de Noronha, 161, Chácara Inglesa, São Paulo, SP, 04141000",
          "waitTime": 3,
          "overTime": null,
          "instructions": "Deliver document for test.",
          "shareds": [],
          "checkin": 1477482610,
          "checkout": 1477482614,
          "ack": {
            "signatureFileUrl": "http://s3-sa-east-1.amazonaws.com/loggi-development-media/packages/1857/10891/wp-7476-protocolo.png",
            "unavailableSignatureUrl": "http://static.development.loggi.com:8080/images/stable/e-receipt/bg-protocol-fail-temp.gif",
            "signedByName": null,
            "signedByDocument": null
          },
          "isFavorite": false
        }
      ],
      "driver": {
        "fullName": "Driver Test",
        "photoUrl": {
          "default": "http://s3-sa-east-1.amazonaws.com/loggi-development-media/images/thumbs/drivers/-default.jpg.jpg"
        },
        "mobile1": "11999992788"
      }
    }
  }
}
```

### Cancel Order

Example of mutation to cancel order by id. Only orders without drivers can be cancelled (status: allocating).

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
