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

The operation is considered with success when the user node from response has data. Then, you need to use field `apiKey` in header for the next operations how described in [authorization introduction](/introduction/authorization).

> TODO: (sec) Verify if this operation is protected against brute force, after, inspect if UserNode has some sensitive data.


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
