Estimates
==========

The estimate of an inquiry needs the following data:

- city: Id of the city. Query to list [all cities](../corp/city);

- transportType: Select transport type, can be moto, bicycle or van;

- points: List of hashes with the stop points data, ranging from 2 to a maximum of 15 points. Fields for each point:
    - lat: float value representing Latitude
    - lng: float value representing Longitude
    - hasService: boolean that indicates if this point has any kind of service that could spend a considerable time of the driver, e.g: authenticate a document.

- optimize: a boolean value that indicates if the result of the waypoints indexes can consider a better route.

Example:

```graphiql
query {
  estimateOrder(
    city: 1
    transportType: moto
    points: [
      { lat: -23.5024555, lng: -46.696077100000025 }
      { lat: -23.5050657, lng: -46.69513159999997, hasService: false }
    ]
    optimize: true
  ) {
    routeOptimized
    prices {
      label
      description
      slo
      sloDisplay
      estimatedCost
      distance
      originalEta
    }
    waypoints {
      index
      indexDisplay
      originalIndex
      originalIndexDisplay
      outOfCityCover
      error
    }
  }
}
```
