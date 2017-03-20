# Estimate Delivery

Useful to estimate delivery cost to destination(s).

Request example:

```graphql
query {
  estimate(
    shopId: 10,
    packagesDestination: [
      {
        lat: -23.5025491,
        lng: -46.69607400000001   
      }
    ]
    chargeMethod: 1,
    optimize: true
  ) {
    packages {
          error
          eta
          index
          rideCm
          outOfCityCover
          outOfCoverageArea
          originalIndex
          waypoint {
            indexDisplay
            originalIndexDisplay
            role
          }
    }
    routeOptimized
    normal {
      cost
      distance
      eta
    }
    optimized {
      cost
      distance
      eta
    }
  }   
}

```

Response example:

```
{
  "data": {
    "estimate": {
      "packages": [
        {
          "error": null,
          "eta": 1552,
          "index": 1,
          "rideCm": 21.84,
          "outOfCityCover": false,
          "outOfCoverageArea": true,
          "originalIndex": 1,
          "waypoint": {
            "indexDisplay": "B",
            "originalIndexDisplay": "B",
            "role": "ra"
          }
        }
      ],
      "routeOptimized": false,
      "normal": {
        "cost": 21.84,
        "distance": 7504,
        "eta": 1852
      },
      "optimized": {
        "cost": 21.84,
        "distance": 7504,
        "eta": 1852
      }
    }
  }
}
```

#### NOTES:

- ```eta``` (*estimated time to deliver*) is measured in seconds.
- ```shopId``` can be obtained through a call to the ```all-shops``` endpoint.  
