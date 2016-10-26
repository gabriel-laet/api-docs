# User - Mutations

## Create User with createOrUpdateCorporateUser

Use `createOrUpdateCorporateUser` mutation to create one user. **Remeber that user must be administrator**. 

```
    mutation {
      createOrUpdateCorporateUser(input:{
        firstName: "first_name_test",
        lastName: "last_name_test",
        email: "test_email@teste.com",
        mobile1: "1111111111",
        mobile2: "2222222222",
        password: "test_password",
        role: "regular",
      }){
        invitation{
          email,
          firstName,
          lastName,
        }
        success
        action
        errors{
          field
          message
        }
      }
    }
```

**JSON**

``` 
    {
      "data": {
        "createOrUpdateCorporateUser": {
          "invitation": {
            "email": "test_email@teste.com",
            firstName: "first_name_test",
            lastName: "last_name_test"
          },
          "success": true,
          "action": "created",
          "errors": []
        }
      }
    }
```


## Update User with createOrUpdateCorporateUser

Use `createOrUpdateCorporateUser` mutation with `user.PK` to update. 

```
    mutation {
      createOrUpdateCorporateUser(input:{
        pk: 1,
        firstName: "first_name_test2",
        lastName: "last_name_test2",
      }){
        invitation{
          email,
          firstName,
          lastName,
        }
        success
        action
        errors{
          field
          message
        }
      }
    }
```

**JSON**

``` 
    {
      "data": {
        "createOrUpdateCorporateUser": {
          "invitation": {
            "email": "test_email@teste.com",
            firstName: "first_name_test2",
            lastName: "last_name_test2"
          },
          "success": true,
          "action": "updated",
          "errors": []
        }
      }
    }
```

