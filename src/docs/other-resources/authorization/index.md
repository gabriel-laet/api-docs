# Authorization resources


## Login

To authenticated, you need of a valid credential.

```graphiql
mutation {
  login(input:{
    email: "a-valid-email@domain.ext",
    token: "a-valid-credential",
  }) {
    clientMutationId
    user {
        apiKey
    }
  }
}
```

The operation is considered successful when the user node from the response has data. Then, you will need to use field `apiKey` in header for the next operations as described in [authorization introduction](/introduction/authorization).


## Logout

```graphiql
mutation{
    logout(input: {clientMutationId: "xxxxx"}){
        user{
          pk
        }
    }
}
```
