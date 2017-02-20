# Order follow-up

After an order is confirmed, it is possible to get information about its status. The input `id` should be the result of `order.pk` from the [confirmation mutation](/corp-overview/confirm-an-order):

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
