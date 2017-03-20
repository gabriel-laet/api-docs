# Create Retail Order

Useful to Create a Retail Order. Can return Inquiry and Order information.

Request example:

```graphql
{"query": "mutation {createRetailOrder(input: {clientMutationId:\"loggi\" id: 10, packages: [ {recipientName: \"Joao da Silva\", recipientPhone: \"11999999999\", destinationAddress: {addressComponents: [ {longName: \"161\", shortName: \"161\", types: [\"street_number\"], }, {longName: \"Rua Antônieta Leitão\", shortName: \"R. Antônieta Leitão\", types: [\"route\"], }, {longName: \"Freguesia do Ó\", shortName: \"Freguesia do Ó\", types: [\"neighborhood\", \"political\"], }, {longName: \"São Paulo\", shortName: \"São Paulo\", types: [\"locality\", \"political\"], }, {longName: \"São Paulo\", shortName: \"São Paulo\", types: [\"administrative_area_level_2\", \"political\"], }, {longName: \"São Paulo\", shortName: \"São Paulo\", types: [\"administrative_area_level_1\", \"political\"], }, {longName: \"Brazil\", shortName: \"BR\", types: [\"country\", \"political\"], }, {longName: \"02925-160\", shortName: \"02925-160\", types: [\"postal_code\"], } ], geometry: {location: {lat: -23.5024555, lng: -46.696077100000025 }, }, formattedAddress: \"Rua Antônieta Leitão, 161\" types: [\"street_address\"] } chargeValue: \"200.20\", chargeMethod: 1, chargeChange: \"10.80\"} ] }) {shop {pk name order {pk packages {pk status pickupWaypoint {index indexDisplay eta legDistance} waypoint {index indexDisplay eta legDistance } } } } } }"}
```

Response example:

```
{
  "data": {
    "createRetailOrder": {
      "shop": {
        "pk": 10,
        "name": "A Happy Shop",
        "order": {
          "pk": 33859,
          "packages": [
            {
              "pk": 80455,
              "status": "allocating",
              "pickupWaypoint": {
                "index": 0,
                "indexDisplay": "A",
                "eta": 1490031190,
                "legDistance": 0
              },
              "waypoint": {
                "index": 1,
                "indexDisplay": "B",
                "eta": 1490033005,
                "legDistance": 7506
              }
            }
          ]
        }
      }
    }
  }
}
```

#### NOTES:

- ```createRetailOrder.input.id``` can be obtained through a call to the ```all-shops``` endpoint (```node.pk```).
