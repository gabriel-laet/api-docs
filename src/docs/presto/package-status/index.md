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
