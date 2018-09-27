# Get All Shops information

Useful to get information on all shops (shopId, name, categories, etc).

Request example:

```graphql
query {
  allShops {
    edges {
      node {
        name
        pickupInstructions
        pk
        address {
          pos
          addressSt
          addressData
        }
        chargeOptions {
          label
        }
      }
    }
  }
}
```

Response example:

```
{"data": {
    "allShops": {
      "edges": [
        {
          "node": {
            "name": "Coelho Burguer",
            "pickupInstructions": "Retirar pacotes no balcão",
            "pk": 129,
            "pricingAreaDiscount": {
              "value": "4.00",
              "percentage": "31.01"
            },
            "address": {
              "pos": "{ \"type\": \"Point\", \"coordinates\": [ -46.6516703, -23.5516433 ] }",
              "addressSt": "Rua Augusta",
              "addressData": "{\"geometry\": {\"location\": {\"lat\": -23.5516433, \"lng\": -46.6516703}}, \"address_components\": [{\"long_name\": \"588\", \"short_name\": \"588\", \"types\": [\"street_number\"]}, {\"long_name\": \"Rua Augusta\", \"short_name\": \"R. Augusta\", \"types\": [\"route\"]}, {\"long_name\": \"Consola\\u00e7\\u00e3o\", \"short_name\": \"Consola\\u00e7\\u00e3o\", \"types\": [\"political\", \"sublocality\", \"sublocality_level_1\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"SP\", \"types\": [\"administrative_area_level_1\", \"political\"]}, {\"long_name\": \"Brazil\", \"short_name\": \"BR\", \"types\": [\"country\", \"political\"]}, {\"long_name\": \"01304\", \"short_name\": \"01304\", \"types\": [\"postal_code\", \"postal_code_prefix\"]}], \"partial_match\": true, \"formatted_address\": \"R. Augusta, 588 - Consola\\u00e7\\u00e3o, S\\u00e3o Paulo - SP, Brazil\", \"types\": [\"street_address\"]}"
            },
            "chargeOptions": [
              {
                "label": "Cartão de Crédito"
              },
              {
                "label": "Cartão de Débito"
              },
              {
                "label": "Dinheiro com troco"
              },
              {
                "label": "Dinheiro sem troco"
              },
              {
                "label": "Máquina da loja"
              },
              {
                "label": "Cheque"
              },
              {
                "label": "Não há cobrança"
              },
              {
                "label": "Vale refeição VR"
              },
              {
                "label": "Vale refeição Sodexo"
              },
              {
                "label": "Vale refeição Alelo"
              },
              {
                "label": "Vale refeição Ticket"
              }
            ]
          }
        }
      ]
    }
  }
}
```
