# Search an order

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
