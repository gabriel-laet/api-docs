# API documentation - User


### Login

To authenticated, you need of a valid credential.

```graphiql
mutation {
  login(input:{
    email: "a-valid-email@domain.ext",
    token: "a-valid-credential",
  }) {
    clientMutationId
    user {
        api_key
    }
  }
}
```

The operation is considered with success when the user node from response has data. Then, you need to use field `api_key` in header for the next operations how described in authentication on conventions.

> TODO: (sec) Verify if this operation is allowed against brute force operations, after, inspect if UserNode has some sensitive data.


### Logout

```graphiql
mutation{
    logout(input: {clientMutationId: "xxxxx"}){
        user{
          pk
        }
    }
}
```
