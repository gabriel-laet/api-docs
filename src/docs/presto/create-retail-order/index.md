# Create Retail Order

Comando usado para criar um novo pedido na plataforma.

Para criar o pedido você vai precisar de um [ShopID](/presto/all-shops) (que será o ponto onde a entrega será retirada) e os endereços e dados dos pacotes a serem entregados.

Exemplo de chamada:


```graphql
mutation {
  createRetailOrder(input: {
    id: 10,
    clientMutationId: "loggi",
    packages: [
    	{
        recipientName: "Joao da Silva",
        recipientPhone: "11999999999",
    	  destinationAddress:{
          addressComponents:[
            {
              longName: "161",
              shortName: "161",
              types: ["street_number"]
            },
            {
              longName: "Rua Antonieta Leitao",
              shortName: "Rua Antonieta Leitao",
              types: ["route"]
            },
  					{
              longName: "Freguesia do O",
              shortName: "Freguesia do O",
              types:["neighborhood", "political"]
            },
  					{
              longName: "Sao Paulo",
              shortName: "Sao Paulo",
              types:["locality", "political"]
            },
  					{
              longName: "Sao Paulo",
              shortName: "Sao Paulo",
              types:["political", "administrative_area_level_2"]
            },
  					{
              longName: "Sao Paulo",
              shortName: "Sao Paulo",
              types:["political", "administrative_area_level_1"]
            },
  					{
              longName: "Brazil",
              shortName: "BR",
              types:["country", "political"]
            },
  					{
              longName: "02925-160",
              shortName: "02925-160",
              types:["postal_code"]
            }  
          ],
          geometry:{
            location: {
              lat: -23.5024555,
              lng: -46.696077100000025
            }
          },
          formattedAddress: "Rua Antonieta Leitao, 161",
          types: ["street_address"]
        },
        chargeValue: "200.20",
        chargeMethod: 1,
        chargeChange: "10.80"          
  		}
    ]      
  }) {
    shop {
      pk
      name
      order {
        pk
        packages {
          pk
          status
          pickupWaypoint {
            index
            indexDisplay
            eta
            legDistance
          }
          waypoint {
            index
            indexDisplay
            eta
            legDistance
          }
        }        
      }      
    }
  }   
}
```

Exemplo de resposta:

```
{
  "data": {
    "createRetailOrder": {
      "shop": {
        "pk": 10,
        "name": "Happy Customer",
        "order": {
          "pk": 33940,
          "packages": [
            {
              "pk": 80563,
              "status": "allocating",
              "pickupWaypoint": {
                "index": 0,
                "indexDisplay": "A",
                "eta": 1490047204,
                "legDistance": 0
              },
              "waypoint": {
                "index": 1,
                "indexDisplay": "B",
                "eta": 1490049018,
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

## NOTAS

- ```createRetailOrder.input.id``` pode ser obtido com uma chamada para [allShops](/presto/all-shops).

### Rastreio de pedidos

O rastreamento é feito por pacote. Uma vez que você cria uma Order, você recebe uma lista de IDs dos pacotes.
Tracking is done by Package, once you create an Order, you get a list of package IDs

* Você pode conferir o estado do pedido com a query [`packageOrder` query](/presto/package-status) ou a lista dos seus pedidos com [`searchOrders`](/presto/search-orders)

### Métodos de pagamento

* Você pode conferir a documentação dos métodos de pagamento na [Página de documentação dos métodos de pagamento](/presto/payment-methods)
