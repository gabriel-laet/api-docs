# API documentation

## User:
    - [Mutations](user/mutation/index.md)
    - [Queries](user/query/index.md)
    - [Enums](user/enums/index.md)



## Login

- Create the first connection in API

```
    mutation{
      login(input: {
        email: "test@test.com",
        password: "xxxxxx",
        token: "xxxxxx"
      }){
        user{
          id
        }
      }
    }
```

## Logout

- User logout

```
    mutation{
      logout(input: 
        {clientMutationId: "xxxxx"}){
        user{
          pk
        }
      }
    }
```
