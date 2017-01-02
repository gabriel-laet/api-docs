# API documentation - Payment Methods


## Search payment methods

List of all payments methods from logged user:

```graphql
query {
  allPaymentMethods {
    edges {
      node {
        pk
        name
        type
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "allPaymentMethods": {
      "edges": [
        {
          "node": {
            "pk": 101,
            "name": "Loggi-Testes"
          }
        },
        {
          "node": {
            "pk": 342,
            "name": "Visa *2360"
          }
        }
      ]
    }
  }
}
```

## Create credit card

Example:

```graphql
mutation {
  createCreditCard(input: {
    billingName: "Loggi test credit card"
    number: "4220111111111111"
    cvv: 92
    expirationMonth: 2
    expirationYear:2017
  }) {
    userCreditCards {
      creditCards {
        name
        pk
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "createCreditCard": {
      "userCreditCards": {
        "creditCards": [
          {
            "name": "Visa *1111"
          },
          {
            "pk": "100"
          }
        ]
      }
    }
  }
}
```

## Create cost center

Example: 

```graphql
mutation {
  createCostCenter(input: {
    name: "Name cost center test"
    clientMutationId: "test_cost_center"
  }) {
    userCostCenters {
      numCostCenters
      costCenters {
        pk
        name
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "createCostCenter": {
      "userCostCenters": {
        "numCostCenters": 52,
        "costCenters": [
          {
            "pk": 162,
            "name": "Name cost center test"
          },
          {
            "pk": 59,
            "name": "Another cost center"
          }
        ]
      }
    }
  }
}
```

## Delete Credit Card

Example:

```graphql
mutation {
  deleteCreditCard(input: {
    id: 163
    clientMutationId: "test_delete"
  }) {
    userCreditCards {
      creditCards {
        name
        pk
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "deleteCreditCard": {
      "userCreditCards": {
        "creditCards": [
          {
            "name": "Visa *1111"
          },
          {
            "pk": "100"
          }
        ]
      }
    }
  }
}
```

## Delete Cost Center

Example:

```graphql
mutation {
  deleteCostCenter(input: {
    id: 137
    clientMutationId: "test_delete"
  }) {
    userCostCenters {
      costCenters {
        name
        pk
      }
    }
  }
}
```

Response example:

```
{
  "data": {
    "deleteCostCenter": {
      "userCostCenters": {
        "costCenters": [
          {
            "name": "Centro de custo - Sumare",
            "pk": 136
          },
          {
            "name": "Agencia Paulista",
            "pk": 56
          }
        ]
      }
    }
  }
}
```
