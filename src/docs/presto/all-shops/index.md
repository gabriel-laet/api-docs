# Get All Shops information

Useful to get information on all shops (shopId, name, categories, etc).

Request example:

```graphql
query {
  allShops {
    edges {
      node {
        name
        pk
        chargeOptions {
          label
          pk
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
    "allShops": {
      "edges": [
        {
          "node": {
            "name": "Happy Customer",
            "pk": 99,
            "chargeOptions": [
              {
                "label": "Cartão de Crédito",
                "pk": 1
              },
              {
                "label": "Cartão de Débito",
                "pk": 2
              },
              {
                "label": "Dinheiro com troco",
                "pk": 8
              },
              {
                "label": "Dinheiro sem troco",
                "pk": 4
              },
              {
                "label": "Máquina da loja",
                "pk": 32
              },
              {
                "label": "Cheque",
                "pk": 16
              },
              {
                "label": "Já pago",
                "pk": 64
              }
            ]
          }
        }
      ]
    }
  }
}
```
