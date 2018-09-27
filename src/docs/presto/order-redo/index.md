# Order Redo

Quando um pedido fica com o estado de `dropped`, é possível refazê-lo com a chamada `orderRedo`. Essa chamada recebe o id do pedido com falha na alocação.

Exemplo de chamada:

```graphql
mutation {
  redoOrder(input: {id: 2}) {
    success
    order {
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
}
```

Exemplo de resposta:

```
{
  "data": {
    "redoOrder": {
      "success": true,
      "order": {
        "id": "T3JkZXJOb2RlOjM=",
        "pk": 3,
        "status": "allocating",
        "packages": [
          {
            "pk": 1,
            "status": "allocating",
            "statusCode": 1,
            "statusCodeDisplay": "Agendado"
          }
        ]
      }
    }
  }
}
```
