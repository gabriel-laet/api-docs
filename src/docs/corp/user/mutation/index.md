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


## Update user contact information

Use this mutation to change user contact information. You will be able
 to change e-mail and mobile numbers. If you change the main mobile 
 number it will be necessary validate the new one.
 
 
 ```
    mutation {
      updatePersonalContactInformation(input:{
        mobile1:"xxxxxxxxx"
        mobile2:"yyyyyyyyy"
        email:"email@example.com"
        clientMutationId:"a_client_id"
      }){
        user{
          mobile1
          mobile2
          email
        }
        phoneVerification{
          phoneNotified
          needVerification
          key
        }
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
        "updatePersonalContactInformation": {
          "user": {
            "mobile1": "xxxxxxxxx",
            "mobile2": "yyyyyyyyy",
            "email": "email@example.com"
          },
          "phoneVerification": {
            "phoneNotified": null,
            "needVerification": false,
            "key": null
          },
          "errors": []
        }
      }
    }
 ```
 
## Update user general informations
  
You can use this mutation to update the first name, last name and cpf.
  
  ```
  mutation {
      updatePersonalInformation(input:{
        firstName:"First"
        lastName:"Last"
        cpf:"11177788899"
        clientMutationId:"a_client_id"
      }){
        user{
          firstName
          lastName
          cpf
        }
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
        "updatePersonalInformation": {
          "user": {
            "firstName": "First",
            "lastName": "Last",
            "cpf": "17103100225"
          },
          "errors": []
        }
      }
    }
  ```
  
## Update user address information
This mutation allow change user address information. The `addressData` is retrieved using the Google geocode service.
```
    mutation{
      updatePersonalAddress(
        input:
        {
          clientMutationId: "a_client_id"
          addressData: {
            addressComponents: [{
              longName:"161",
              shortName:"161",
              types:["street_number"],
              },{
                longName: "Rua Marieta Leitao",
                shortName: "R. Marieta Leitao",
                types: ["route"],
              },{
                longName: "Freguesia do amor",
                shortName: "Freguesia do amor",
                types: ["neighborhood", "political"],
              },{
                longName: "Sao Paulo",
                shortName: "Sao Paulo",
                types: ["locality", "political"]
              },{
                longName: "Sao Paulo",
                shortName: "Sao Paulo",
                types: ["administrative_area_level_2", "political"],
              },{
                longName: "Sao Paulo",
                shortName: "Sao Paulo",
                types: ["administrative_area_level_1", "political"],
              },{
                longName: "Brazil",
                shortName: "BR",
                types: ["country", "political"],
              },{
                longName: "02925-160",
                  shortName: "02925-160",
                types: ["postal_code"],
              }]
              addressComplement: "Condominio Victoria, apto 108"
              geometry: {
                location: {
                  lat: -1,
                  lng: -1
                }
              }
              types: ["street_address"]
              formattedAddress: "{FORMATTED}"
          }
        }
      ){
        clientMutationId
        user {
          address {
            addressFormatted
            addressSt
            addressComplement
            addressNumber
            zip
          }
        }
      }
    }
```

  **JSON**
  ```
    {  
       "updatePersonalAddress":{  
          "clientMutationId":"a_client_id",
          "user":{  
             "address":{  
                "addressFormatted":"Rua Marieta Leitao, 161 - Condominio Victoria, apto 108",
                "addressSt":"Rua Marieta Leitao",
                "addressComplement":"Condominio Victoria, apto 108",
                "addressNumber":"161",
                "zip":"02925160"
             }
          }
       }
    }
  ```
