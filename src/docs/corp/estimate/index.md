# API documentation - Estimate


Calculate price for an order to a specific city, transport type and points.

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
