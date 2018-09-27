# Package Status

Forma de se informar dos estados de seus pacotes e pedidos.

Exemplo de chamada:

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

NOTA: O ```packageId``` pode ser qualquer que esteve na resposta de um [createRetailOrder](/presto/create-retail-order), (qualquer ```package.pk``` que faça parte da lista de ```shop.order.packages```) ou buscado com [allPackages](/presto/all-packages) (qualquer ```node.pk``` na lista ```data.allPackages.edges```).

Exemplo de resposta:

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

- ```packageOrder.packageId``` pode ser obtido através da chamada [allPackages](/presto/all-packages).
- ```package.status``` Pode ser qualquer um dos resultados abaixo:
  - ```Allocating```: A loggi está procurando um mensageiro para fazer a entrega.
  - ```Going to pickup```: Um mensageiro foi encontrado e alocado e está indo para o ponto de retirada.
  - ```Pickup```: O mensageiro alocado está no ponto de retirada.
  - ```Going to deliver```: O mensageiro saiu do ponto de retirada e está a caminho do ponto de entrega.
  - ```Deliver```: O mensageiro está no ponto de entrega, fazendo a mesma.
  - ```Delivered```: O pacote foi entregue pelo mensageiro.
  - ```Failed```: um erro ocorreu durante a retirada ou entrega desse pacote, olhe o ```package.statusCode``` e ```package.statusCodeDisplay``` para obter mais detalhes.
- ```package.statusCode``` e ```package.statusCodeDisplay``` mostram o status do pacote, segundo a lista abaixo:
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
