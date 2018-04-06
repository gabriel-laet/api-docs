# Package Status

Useful to retrieve information on Order and Package status.

Request example:

```graphql
query {
  packageOrder(packageId:80455) {
    id
    pk
    status
    packages {
      pk
      status
      statusCode
      statusCodeDisplay
    }
  }
}
```

NOTE: the ```packageId``` can be any returned by the mutation [createRetailOrder](/presto/create-retail-order) (any ```package.pk``` in the ```shop.order.packages``` list) or through querying [allPackages](/presto/all-packages) (any ```node.pk``` in the ```data.allPackages.edges``` list).

Response example:

```
{
  "data": {
    "packageOrder": {
      "id": "T3JkZXJOb2RlOjMzODU5",
      "pk": 33859,
      "status": "dropped",
      "packages": [
        {
          "pk": 80455,
          "status": null,
          "statusCode": 0,
          "statusCodeDisplay": "Não disponível"
        }
      ]
    }
  }
}
```

## NOTES

- ```packageOrder.packageId``` can be obtained through a query to [allPackages](/presto/all-packages).
- ```package.status``` is an enumerable with the following values:
  - ```Allocating```: loggi is searching for a driver to make this delivery.
  - ```Going to pickup```: a driver was allocated, and is going to pickup this package at origin address.
  - ```Pickup```: driver arrived at origin, and is picking up this package.
  - ```Going to deliver```: driver picked up this package, and is going to customer address.
  - ```Deliver```: driver arrived at customer address, and is delivering this package.
  - ```Delivered```: driver delivered this package.
  - ```Failed```: an error ocurred during pickup/delivery of this package, check ```package.statusCode``` and ```package.statusCodeDisplay``` for more details.
- ```package.statusCode``` and ```package.statusCodeDisplay``` show the status of this package delivery, with the following values:
  - ```0``` (Não disponível).
  - ```1``` (Agendado).
  - ```2``` (Entregue).
  - ```3``` (Retirado).
  - ```4``` (Indo retirar).
  - ```5``` (Em rota de entrega).
  - ```7``` (Indo para retorno).
  - ```9``` (Retornado para o cliente).
  - ```11``` (Recusado pelo destinatário).
  - ```12``` (Destinatário ausente).
  - ```13``` (Endereço errado).
  - ```14``` (Mercadoria avariada).
  - ```15``` (Pacote extraviado).
  - ```16``` (Falha).
  - ```17``` (Pacote cancelado).
  - ```18``` (Pacote muito grande).
  - ```19``` (Pacote não encontrado).
  - ```20``` (Roubo / Furto).
  - ```23``` (Entrega prejudicada).
  - ```31``` (Pacote não retirado).