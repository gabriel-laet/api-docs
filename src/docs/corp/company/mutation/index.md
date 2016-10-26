# Company - Mutations

## Update company contact information
This mutation is used to change the company phone numbers. Just one phone (`landline1`) is required, the second is optional.
    
    ```
    mutation {
      updateCompanyContact(input:{
        clientMutationId: "a_client_id"
        landline1: "1130770336"
        landline2: ""
      }){
        company{
          landline1
          landline2
        }
      }
    }
    ```
    
  **JSON**
  ```
    {
      "data": {
        "updateCompanyContact": {
          "company": {
            "landline1": "1130770336",
            "landline2": null
          }
        }
      }
    }
  ```
  
## Update company general information
 This mutation change the name and CNPJ of company.
 
 ```
    mutation {
      updateCompanyInformation(input:{
        companyName: "New name"
        cnpj: "09574049000122"
        clientMutationId: "a_client_id"
      }){
        company{
          name
          cnpj
        }
      }
    }
 ```

**JSON**

```
{
  "data": {
    "updateCompanyInformation": {
      "company": {
        "name": "New name",
        "cnpj": "09574049000122"
      }
    }
  }
}
```

## Update company address information
This mutation change the company address information. The `addressData` is retrieved using the Google geocode service.

```
mutation {
  updateCompanyAddress(input:{
    clientMutationId:"a_client_id"
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
  }){
    company{
      addressSt
      addressNumber
      addressFormatted
      zip
    }
  }
}
```

**JSON**
```
{
  "data": {
    "updateCompanyAddress": {
      "company": {
        "addressSt": "Rua Marieta Leitao",
        "addressNumber": "161",
        "addressFormatted": "Rua Marieta Leitao, 161 - Condominio Victoria, apto 108",
        "zip": "02925-160"
      }
    }
  }
}
```
