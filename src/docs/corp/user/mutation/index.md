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


## Create favorite address
This mutation allow creates a new favorite address. This address can be used as a shortcut to address commonly used in orders.
The response of this mutation will return a paginated result of all favorite addresses, including the new one.

```
mutation {
  createFavoriteAddress(input:{
    clientMutationId: "a_client_id"
    favoriteAddressData: {
      addressLabel: "New favorite address"
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
  }){
    favoriteAddresses{
    	pagination{
      	pages
        page
        itemsPerPage
    	}
      addresses{
        addressData
        addressFormatted
        addressSt
        addressNumber
        zip
        label
      }
      numAddresses
  	}
  }
}
```


**JSON**
```
{
  "data": {
    "createFavoriteAddress": {
      "favoriteAddresses": {
        "pagination": {
          "pages": 1,
          "page": 1,
          "itemsPerPage": 20
        },
        "addresses": [
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": -1.0, \"lng\": -1.0}}, \"address_components\": [{\"long_name\": \"161\", \"short_name\": \"161\", \"types\": [\"street_number\"]}, {\"long_name\": \"Rua Marieta Leitao\", \"short_name\": \"R. Marieta Leitao\", \"types\": [\"route\"]}, {\"long_name\": \"Freguesia do amor\", \"short_name\": \"Freguesia do amor\", \"types\": [\"neighborhood\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"locality\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"administrative_area_level_1\", \"political\"]}, {\"long_name\": \"Brazil\", \"short_name\": \"BR\", \"types\": [\"country\", \"political\"]}, {\"long_name\": \"02925-160\", \"short_name\": \"02925-160\", \"types\": [\"postal_code\"]}], \"partial_match\": true, \"formatted_address\": \"{FORMATTED}\", \"types\": [\"street_address\"]}",
            "addressFormatted": "Rua Marieta Leitao, 161 - Condominio Victoria, apto 108",
            "addressSt": "Rua Marieta Leitao",
            "addressNumber": "161",
            "zip": "02925160",
            "label": "New favorite address"
          }
        ],
        "numAddresses": null
      }
    }
  }
}
```


## Update favorite address
This mutation able user to change information about a given favorites address.
```
mutation {
  updateFavoriteAddress(input:{
    pk: 164
    clientMutationId: "a_client_id"
    favoriteAddressData:{
      addressLabel: "My favorite address"
      addressData: {
        addressComponents: [{
          longName:"161",
          shortName:"161",
          types:["street_number"],
          },{
            longName: "Rua Suspiro de Morango",
            shortName: "R. Suspiro de Morango",
            types: ["route"],
          },{
            longName: "Freguesia do amor",
            shortName: "F. do amor",
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
            types: ["postal_code"]
          }]
          formattedAddress: "{aaa}"
          geometry: {
            location: {
              lat: -1,
              lng: -1
            }
          }
          types: ["street_address"]
      }
    }
  }){
    address {
      id
      pk
      addressSt
      addressNumber
      addressFormatted
      addressComplement
      addressData
    }
  }
}
```

**JSON**
```
{
  "data": {
    "updateFavoriteAddress": {
      "address": {
        "id": "RmF2b3JpdGVBZGRyZXNzTm9kZToxNjQ=",
        "pk": 164,
        "addressSt": "Rua Suspiro de Morango",
        "addressNumber": "161",
        "addressFormatted": "Rua Suspiro de Morango, 161",
        "addressComplement": null,
        "addressData": "{\"geometry\": {\"location\": {\"lat\": -1.0, \"lng\": -1.0}}, \"address_components\": [{\"long_name\": \"161\", \"short_name\": \"161\", \"types\": [\"street_number\"]}, {\"long_name\": \"Rua Suspiro de Morango\", \"short_name\": \"R. Suspiro de Morango\", \"types\": [\"route\"]}, {\"long_name\": \"Freguesia do amor\", \"short_name\": \"F. do amor\", \"types\": [\"neighborhood\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"locality\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"administrative_area_level_1\", \"political\"]}, {\"long_name\": \"Brazil\", \"short_name\": \"BR\", \"types\": [\"country\", \"political\"]}, {\"long_name\": \"02925-160\", \"short_name\": \"02925-160\", \"types\": [\"postal_code\"]}], \"partial_match\": true, \"formatted_address\": \"{aaa}\", \"types\": [\"street_address\"]}"
      }
    }
  }
}
```


## Delete favorite address
This mutation delete a given favorite address. If the address was sucessfully deleted it will return a remaining list of favorite address.
```
mutation {
  deleteFavoriteAddress(input:{
    pk: 164
    itemsPerPage: 10
    page: 1
    clientMutationId: "a_client_id"
  }){
    favoriteAddresses{
      addresses{
        addressData
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
  "data": {
    "deleteFavoriteAddress": {
      "favoriteAddresses": {
        "addresses": [
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": -22.9422422, \"lng\": -43.18133039999998}}, \"place_id\": \"ChIJj_7b3Ix_mQARfQ26lrNLaho\", \"components\": {\"street_number\": \"228\", \"locality\": \"Rio de Janeiro\", \"country\": \"Brazil\", \"route\": \"Praia de Botafogo\", \"postal_code\": \"22250-040\", \"administrative_area_level_2\": \"Rio de Janeiro\", \"administrative_area_level_1\": \"Rio de Janeiro\", \"sublocality\": \"Botafogo\"}, \"address_components\": [{\"long_name\": \"228\", \"types\": [\"street_number\"], \"short_name\": \"228\"}, {\"long_name\": \"Praia de Botafogo\", \"types\": [\"route\"], \"short_name\": \"Praia de Botafogo\"}, {\"long_name\": \"Botafogo\", \"types\": [\"sublocality_level_1\", \"sublocality\", \"political\"], \"short_name\": \"Botafogo\"}, {\"long_name\": \"Rio de Janeiro\", \"types\": [\"locality\", \"political\"], \"short_name\": \"Rio de Janeiro\"}, {\"long_name\": \"Rio de Janeiro\", \"types\": [\"administrative_area_level_2\", \"political\"], \"short_name\": \"Rio de Janeiro\"}, {\"long_name\": \"Rio de Janeiro\", \"types\": [\"administrative_area_level_1\", \"political\"], \"short_name\": \"RJ\"}, {\"long_name\": \"Brazil\", \"types\": [\"country\", \"political\"], \"short_name\": \"BR\"}, {\"long_name\": \"22250-040\", \"types\": [\"postal_code\"], \"short_name\": \"22250-040\"}], \"formatted_address\": \"Praia de Botafogo, 228 - Botafogo, Rio de Janeiro - RJ, 22250-040, Brazil\", \"types\": [\"premise\"]}",
            "addressFormatted": "Praia de Botafogo, 228 - 16o andar",
            "addressSt": "Praia de Botafogo",
            "addressComplement": "16o andar",
            "addressNumber": "228",
            "zip": "22250-040"
          },
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": -1.0, \"lng\": -1.0}}, \"address_components\": [{\"long_name\": \"161\", \"short_name\": \"161\", \"types\": [\"street_number\"]}, {\"long_name\": \"Rua Suspiro de Morango\", \"short_name\": \"R. Suspiro de Morango\", \"types\": [\"route\"]}, {\"long_name\": \"Freguesia do amor\", \"short_name\": \"F. do amor\", \"types\": [\"neighborhood\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"locality\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"]}, {\"long_name\": \"Sao Paulo\", \"short_name\": \"Sao Paulo\", \"types\": [\"administrative_area_level_1\", \"political\"]}, {\"long_name\": \"Brazil\", \"short_name\": \"BR\", \"types\": [\"country\", \"political\"]}, {\"long_name\": \"02925-160\", \"short_name\": \"02925-160\", \"types\": [\"postal_code\"]}], \"partial_match\": true, \"formatted_address\": \"{aaa}\", \"types\": [\"street_address\"]}",
            "addressFormatted": "Rua Suspiro de Morango, 161 - COMPLEMENTO",
            "addressSt": "Rua Suspiro de Morango",
            "addressComplement": "COMPLEMENTO",
            "addressNumber": "161",
            "zip": "02925-160"
          },
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": \"-23.5806081\", \"lng\": \"-46.684168\"}, \"viewport\": {\"northeast\": {\"lat\": \"-23.5792591197085\", \"lng\": \"-46.6828190197085\"}, \"southwest\": {\"lat\": \"-23.5819570802915\", \"lng\": \"-46.6855169802915\"}}, \"location_type\": \"ROOFTOP\"}, \"address_components\": [{\"long_name\": \"400\", \"types\": [\"street_number\"], \"short_name\": \"400\"}, {\"long_name\": \"Avenida Cidade Jardim\", \"types\": [\"route\"], \"short_name\": \"Av. Cidade Jardim\"}, {\"long_name\": \"Jardim Europa\", \"types\": [\"neighborhood\", \"political\"], \"short_name\": \"Jardim Europa\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"locality\", \"political\"], \"short_name\": \"S\\u00e3o Paulo\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"], \"short_name\": \"S\\u00e3o Paulo\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_1\", \"political\"], \"short_name\": \"SP\"}, {\"long_name\": \"Brazil\", \"types\": [\"country\", \"political\"], \"short_name\": \"BR\"}, {\"long_name\": \"01448-090\", \"types\": [\"postal_code\"], \"short_name\": \"01448-090\"}], \"formatted_address\": \"Av. Cidade Jardim, 400 - Jardins, S\\u00e3o Paulo - SP, 01448-090, Brazil\", \"types\": [\"street_address\"]}",
            "addressFormatted": "Avenida Cidade Jardim, 400, 2o  andar",
            "addressSt": "Avenida Cidade Jardim",
            "addressComplement": "2o  andar",
            "addressNumber": "400",
            "zip": "01448-090"
          },
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": -23.5619487, \"lng\": -46.665880500000014}}, \"place_id\": \"Ek1SdWEgSGFkZG9jayBMb2JvLCAxMjAwIC0gQ2VycXVlaXJhIEPDqXNhciwgU8OjbyBQYXVsbyAtIFNQLCAwMTQxNC0wMDIsIEJyYXNpbA\", \"components\": {\"street_number\": \"1200\", \"locality\": \"S\\u00e3o Paulo\", \"country\": \"Brazil\", \"route\": \"Rua Haddock Lobo\", \"postal_code\": \"01414-002\", \"administrative_area_level_2\": \"S\\u00e3o Paulo\", \"administrative_area_level_1\": \"S\\u00e3o Paulo\", \"sublocality\": \"Cerqueira C\\u00e9sar\"}, \"address_components\": [{\"long_name\": \"1200\", \"types\": [\"street_number\"], \"short_name\": \"1200\"}, {\"long_name\": \"Rua Haddock Lobo\", \"types\": [\"route\"], \"short_name\": \"Rua Haddock Lobo\"}, {\"long_name\": \"Cerqueira C\\u00e9sar\", \"types\": [\"sublocality_level_1\", \"sublocality\", \"political\"], \"short_name\": \"Cerqueira C\\u00e9sar\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"locality\", \"political\"], \"short_name\": \"S\\u00e3o Paulo\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"], \"short_name\": \"S\\u00e3o Paulo\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_1\", \"political\"], \"short_name\": \"SP\"}, {\"long_name\": \"Brazil\", \"types\": [\"country\", \"political\"], \"short_name\": \"BR\"}, {\"long_name\": \"01414-002\", \"types\": [\"postal_code\"], \"short_name\": \"01414-002\"}], \"formatted_address\": \"Rua Haddock Lobo, 1200 - Cerqueira C\\u00e9sar, S\\u00e3o Paulo - SP, 01414-002, Brazil\", \"types\": [\"street_address\"]}",
            "addressFormatted": "Rua Haddock Lobo, 1200 - kjndkajsnd",
            "addressSt": "Rua Haddock Lobo",
            "addressComplement": "kjndkajsnd",
            "addressNumber": "1200",
            "zip": "01414-002"
          },
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": -23.58721, \"lng\": -46.68112}}, \"address_components\": [{\"long_name\": \"1\", \"types\": [\"street_number\"], \"short_name\": \"1\"}, {\"long_name\": \"Rua Iguatemi\", \"types\": [\"route\"], \"short_name\": \"R. Iguatemi\"}, {\"long_name\": \"Itaim Bibi\", \"types\": [\"neighborhood\", \"political\"], \"short_name\": \"Itaim Bibi\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"locality\", \"political\"], \"short_name\": \"S\\u00e3o Paulo\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"], \"short_name\": \"S\\u00e3o Paulo\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_1\", \"political\"], \"short_name\": \"SP\"}, {\"long_name\": \"Brazil\", \"types\": [\"country\", \"political\"], \"short_name\": \"BR\"}, {\"long_name\": \"01451\", \"types\": [\"postal_code_prefix\", \"postal_code\"], \"short_name\": \"01451\"}], \"formatted_address\": \"Rua Iguatemi, 1 - Itaim Bibi, S\\u00e3o Paulo - SP, Brazil\"}",
            "addressFormatted": "Rua Iguatemi, 1, Apto 111",
            "addressSt": "Rua Iguatemi",
            "addressComplement": "Apto 111",
            "addressNumber": "1",
            "zip": "01451"
          },
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": \"-23.5857579\", \"lng\": \"-46.6814499\"}, \"viewport\": {\"northeast\": {\"lat\": \"-23.5844089197085\", \"lng\": \"-46.68010091970849\"}, \"southwest\": {\"lat\": \"-23.5871068802915\", \"lng\": \"-46.68279888029149\"}}, \"location_type\": \"ROOFTOP\"}, \"address_components\": [{\"long_name\": \"Condom\\u00ednio Edif\\u00edcio Guarita\", \"short_name\": \"Condom\\u00ednio Edif\\u00edcio Guarita\", \"types\": [\"premise\"]}, {\"long_name\": \"335\", \"short_name\": \"335\", \"types\": [\"street_number\"]}, {\"long_name\": \"Rua Iguatemi\", \"short_name\": \"R. Iguatemi\", \"types\": [\"route\"]}, {\"long_name\": \"Itaim Bibi\", \"short_name\": \"Itaim Bibi\", \"types\": [\"neighborhood\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"S\\u00e3o Paulo\", \"types\": [\"locality\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"SP\", \"types\": [\"administrative_area_level_1\", \"political\"]}, {\"long_name\": \"Brazil\", \"short_name\": \"BR\", \"types\": [\"country\", \"political\"]}, {\"long_name\": \"01451-011\", \"short_name\": \"01451-011\", \"types\": [\"postal_code\"]}], \"formatted_address\": \"Condom\\u00ednio Edif\\u00edcio Guarita - Rua Iguatemi, 335 - Itaim Bibi, S\\u00e3o Paulo - SP, 01451-011, Brazil\", \"types\": [\"premise\"]}",
            "addressFormatted": "Rua Iguatemi, 335, Aaaaaa",
            "addressSt": "Rua Iguatemi",
            "addressComplement": "Aaaaaa",
            "addressNumber": "335",
            "zip": "01451-011"
          },
          {
            "addressData": "{\"geometry\": {\"location_type\": \"RANGE_INTERPOLATED\", \"bounds\": {\"northeast\": {\"lat\": -22.9249026, \"lng\": -43.211453}, \"southwest\": {\"lat\": -22.9249167, \"lng\": -43.2114638}}, \"viewport\": {\"northeast\": {\"lat\": -22.9235606697085, \"lng\": -43.2101094197085}, \"southwest\": {\"lat\": -22.9262586302915, \"lng\": -43.2128073802915}}, \"location\": {\"lat\": -22.9249026, \"lng\": -43.211453}}, \"address_components\": [{\"long_name\": \"72\", \"types\": [\"street_number\"], \"short_name\": \"72\"}, {\"long_name\": \"Rua do Bispo\", \"types\": [\"route\"], \"short_name\": \"R. do Bpo.\"}, {\"long_name\": \"Rio Comprido\", \"types\": [\"sublocality_level_1\", \"sublocality\", \"political\"], \"short_name\": \"Rio Comprido\"}, {\"long_name\": \"Rio de Janeiro\", \"types\": [\"locality\", \"political\"], \"short_name\": \"Rio de Janeiro\"}, {\"long_name\": \"Rio de Janeiro\", \"types\": [\"administrative_area_level_2\", \"political\"], \"short_name\": \"Rio de Janeiro\"}, {\"long_name\": \"Rio de Janeiro\", \"types\": [\"administrative_area_level_1\", \"political\"], \"short_name\": \"RJ\"}, {\"long_name\": \"Brazil\", \"types\": [\"country\", \"political\"], \"short_name\": \"BR\"}, {\"long_name\": \"20961\", \"types\": [\"postal_code_prefix\", \"postal_code\"], \"short_name\": \"20961\"}], \"place_id\": \"EjpSLiBkbyBCcG8uLCA3MiAtIFJpbyBDb21wcmlkbywgUmlvIGRlIEphbmVpcm8gLSBSSiwgQnJhc2ls\", \"formatted_address\": \"R. do Bpo., 72 - Rio Comprido, Rio de Janeiro - RJ, Brazil\", \"types\": [\"street_address\"]}",
            "addressFormatted": "Rua do Bispo, 72",
            "addressSt": "Rua do Bispo",
            "addressComplement": null,
            "addressNumber": "72",
            "zip": "20961"
          },
          {
            "addressData": "{\"geometry\": {\"location\": {\"lat\": -23.5219937, \"query\": \"Av. das Na\\u00e7\\u00f5es Unidas, 123 - Bonfim, Osasco - SP, 06213-170, Brazil\", \"lng\": -46.7702587}}, \"formatted_address\": \"Av. das Na\\u00e7\\u00f5es Unidas, 123 - Bonfim, Osasco - SP, 06213-170, Brazil\", \"place_id\": \"EkVBdi4gZGFzIE5hw6fDtWVzIFVuaWRhcywgMTIzIC0gQm9uZmltLCBPc2FzY28gLSBTUCwgMDYyMTMtMTcwLCBCcmFzaWw\", \"components\": {\"street_number\": \"123\", \"locality\": \"Osasco\", \"country\": \"Brazil\", \"route\": \"Avenida das Na\\u00e7\\u00f5es Unidas\", \"postal_code\": \"06213-170\", \"administrative_area_level_2\": \"Osasco\", \"administrative_area_level_1\": \"S\\u00e3o Paulo\", \"sublocality\": \"Bonfim\"}, \"address_components\": [{\"long_name\": \"123\", \"types\": [\"street_number\"], \"short_name\": \"123\"}, {\"long_name\": \"Avenida das Na\\u00e7\\u00f5es Unidas\", \"types\": [\"route\"], \"short_name\": \"Av. das Na\\u00e7\\u00f5es Unidas\"}, {\"long_name\": \"Bonfim\", \"types\": [\"sublocality_level_1\", \"sublocality\", \"political\"], \"short_name\": \"Bonfim\"}, {\"long_name\": \"Osasco\", \"types\": [\"locality\", \"political\"], \"short_name\": \"Osasco\"}, {\"long_name\": \"Osasco\", \"types\": [\"administrative_area_level_2\", \"political\"], \"short_name\": \"Osasco\"}, {\"long_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_1\", \"political\"], \"short_name\": \"SP\"}, {\"long_name\": \"Brazil\", \"types\": [\"country\", \"political\"], \"short_name\": \"BR\"}, {\"long_name\": \"06213-170\", \"types\": [\"postal_code\"], \"short_name\": \"06213-170\"}], \"partial_match\": true, \"types\": [\"street_address\"]}",
            "addressFormatted": "Avenida das Nações Unidas, 123 - lkajs",
            "addressSt": "Avenida das Nações Unidas",
            "addressComplement": "lkajs",
            "addressNumber": "123",
            "zip": "06213-170"
          },
          {
            "addressData": "{\"geometry\": {\"location_type\": \"RANGE_INTERPOLATED\", \"bounds\": {\"northeast\": {\"lat\": \"-23.7424299\", \"lng\": \"-46.7995015\"}, \"southwest\": {\"lat\": \"-23.7424453\", \"lng\": \"-46.7995092\"}}, \"viewport\": {\"northeast\": {\"lat\": \"-23.7410886197085\", \"lng\": \"-46.7981563697085\"}, \"southwest\": {\"lat\": \"-23.7437865802915\", \"lng\": \"-46.80085433029149\"}}, \"location\": {\"lat\": \"-23.7424299\", \"lng\": \"-46.7995015\"}}, \"address_components\": [{\"long_name\": \"1\", \"short_name\": \"1\", \"types\": [\"street_number\"]}, {\"long_name\": \"Rua das Rosa\", \"short_name\": \"R. das Rosa\", \"types\": [\"route\"]}, {\"long_name\": \"Jardim Sonia Maria\", \"short_name\": \"Jardim Sonia Maria\", \"types\": [\"neighborhood\", \"political\"]}, {\"long_name\": \"Itapecerica da Serra\", \"short_name\": \"Itapecerica da Serra\", \"types\": [\"locality\", \"political\"]}, {\"long_name\": \"Itapecerica da Serra\", \"short_name\": \"Itapecerica da Serra\", \"types\": [\"administrative_area_level_2\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"SP\", \"types\": [\"administrative_area_level_1\", \"political\"]}, {\"long_name\": \"Brazil\", \"short_name\": \"BR\", \"types\": [\"country\", \"political\"]}, {\"long_name\": \"06864-050\", \"short_name\": \"06864-050\", \"types\": [\"postal_code\"]}], \"formatted_address\": \"Rua das Rosa, 1 - Jardim Sonia Maria, Itapecerica da Serra - SP, 06864-050, Brazil\", \"types\": [\"street_address\"]}",
            "addressFormatted": "Rua das Rosa, 1, Fghh",
            "addressSt": "Rua das Rosa",
            "addressComplement": "Fghh",
            "addressNumber": "1",
            "zip": "06864-050"
          },
          {
            "addressData": "{\"geometry\": {\"location_type\": \"RANGE_INTERPOLATED\", \"bounds\": {\"northeast\": {\"lat\": \"-23.5784807\", \"lng\": \"-46.6814496\"}, \"southwest\": {\"lat\": \"-23.5784925\", \"lng\": \"-46.6814628\"}}, \"viewport\": {\"northeast\": {\"lat\": \"-23.5771376197085\", \"lng\": \"-46.6801072197085\"}, \"southwest\": {\"lat\": \"-23.5798355802915\", \"lng\": \"-46.6828051802915\"}}, \"location\": {\"lat\": \"-23.5784925\", \"lng\": \"-46.6814496\"}}, \"address_components\": [{\"long_name\": \"1\", \"short_name\": \"1\", \"types\": [\"street_number\"]}, {\"long_name\": \"Avenida Cidade Jardim\", \"short_name\": \"Av. Cidade Jardim\", \"types\": [\"route\"]}, {\"long_name\": \"Itaim Bibi\", \"short_name\": \"Itaim Bibi\", \"types\": [\"neighborhood\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"S\\u00e3o Paulo\", \"types\": [\"locality\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"S\\u00e3o Paulo\", \"types\": [\"administrative_area_level_2\", \"political\"]}, {\"long_name\": \"S\\u00e3o Paulo\", \"short_name\": \"SP\", \"types\": [\"administrative_area_level_1\", \"political\"]}, {\"long_name\": \"Brazil\", \"short_name\": \"BR\", \"types\": [\"country\", \"political\"]}, {\"long_name\": \"01453\", \"short_name\": \"01453\", \"types\": [\"postal_code_prefix\", \"postal_code\"]}], \"formatted_address\": \"Avenida Cidade Jardim, 1 - Itaim Bibi, S\\u00e3o Paulo - SP, Brazil\", \"types\": [\"street_address\"]}",
            "addressFormatted": "Avenida Cidade Jardim, 1",
            "addressSt": "Avenida Cidade Jardim",
            "addressComplement": "",
            "addressNumber": "1",
            "zip": "01453"
          }
        ]
      }
    }
  }
}
```