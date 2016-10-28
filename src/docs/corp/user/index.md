# API documentation - User


### Login

```graphiql
mutation{
    login(input: {
            email: "test@test.com",
            password: "xxxxxx"
        }){
            user{
                id
            }
        }
    }
```

### Logout

```graphql
mutation{
    logout(input: {clientMutationId: "xxxxx"}){
        user{
          pk
        }
    }
}
```
