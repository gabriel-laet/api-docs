# Estimate Delivery

Para estimar o custo de uma entrega.

Exemplo de chamada:

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

Exemplo de resposta:

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

## NOTAS

- ```eta``` (*estimated time to deliver*) É a estimativa em segundos.
- ```shopId``` Pode ser obtido com uma chamada pra [allShops](/presto/all-shops).  

### Metodos de pagamento e custos de ponto de retorno

* Você pode conferir a documentação dos métodos de pagamento na [Página de documentação dos métodos de pagamento](/presto/payment-methods)
