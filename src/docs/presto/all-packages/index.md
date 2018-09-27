# All Packages

Comando para obter todos os pacotes das últimas 10 horas.

Exemplo de chamada:

```graphql
query {
  allPackages(shopId: 10, product: presto) {
    edges {
      node {
        pk
        status
        orderId
        orderStatus
      }
    }
  }
}
```

Exemplo de resposta:

```
{
  "data": {
    "allPackages": {
      "edges": [
        {
          "node": {
            "pk": 80456,
            "status": null,
            "orderId": 33860,
            "orderStatus": "dropped"
          }
        },
        {
          "node": {
            "pk": 80455,
            "status": null,
            "orderId": 33859,
            "orderStatus": "dropped"
          }
        }
      ]
    }
  }
}
```

## NOTES

- A ```shopId``` pode ser obtida com uma chamada de [allShops](/presto/all-shops).
