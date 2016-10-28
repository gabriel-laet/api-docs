Payment Methods
===============

**Create credit card**

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

```graphql
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
