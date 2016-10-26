# User - Queries

## companyByPk

- Get information about one company 

```
query{
  companyByPk(pk: 1){
    addressFormatted
    ...
  }
}
```

**JSON**

```
{
  "data": {
    "companyByPk": {
      "addressFormatted": "Test, km 52"
    }
  }
}
```

## user

- return informations about the user logged

```
query{
  user{
    username
    email
    ...
  }
}
```

**JSON**

```
{
  "data": {
    "user": {
      "username": "",
      "email": "test@test.com"
    }
  }
}
```


## listCompanyUserRoles

- return one list with (administrator / regular)
  
```
query{
  listCompanyUserRoles {
    value
    label
  }
}

```

**JSON**

```
{
  "data": {
    "listCompanyUserRoles": [
      {
        "value": "administrator",
        "label": "Administrador"
      },
      {
        "value": "regular",
        "label": "Colaborador"
      }
    ]
  }
}
```

## listCompanyUserRoles

- return the default role 

```
query {
  companyUserRoleDefault 
}
```

**JSON**

```
{
  "data": {
    "companyUserRoleDefault": "regular"
  }
}
```


## List favorite addresses
Favorite addresses is an attribute of user and can retrieved using pagination.
```
query{
  user{
   favoriteAddresses(page:1 itemsPerPage:4) {
      numAddresses
      addresses{
        label
        pk
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
    "user": {
      "favoriteAddresses": {
        "numAddresses": 20,
        "addresses": [
          {
            "label": "Antiga Loggi",
            "pk": 133,
            "addressFormatted": "Avenida Cidade Jardim, 400, 2o  andar",
            "addressSt": "Avenida Cidade Jardim",
            "addressComplement": "2o  andar",
            "addressNumber": "400",
            "zip": "01448-090"
          },
          {
            "label": "big house",
            "pk": 154,
            "addressFormatted": "Rua Augusta, 460",
            "addressSt": "Rua Augusta",
            "addressComplement": null,
            "addressNumber": "460",
            "zip": "01304"
          },
          {
            "label": "Bublues' Home",
            "pk": 118,
            "addressFormatted": "Rua Iguatemi, 335, Aaaaaa",
            "addressSt": "Rua Iguatemi",
            "addressComplement": "Aaaaaa",
            "addressNumber": "335",
            "zip": "01451-011"
          },
          {
            "label": "Casa da Mas Bublues",
            "pk": 125,
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

There is a option to search for a favorite address using the field `term` as follow
```
query{
  user{
    favoriteAddresses(page:1 itemsPerPage:4, term:"Casa") {
      numAddresses
      addresses{
        label
        pk
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
    "user": {
      "favoriteAddresses": {
        "numAddresses": 4,
        "addresses": [
          {
            "label": "Casa da Mas Bublues",
            "pk": 125,
            "addressFormatted": "Avenida Cidade Jardim, 1",
            "addressSt": "Avenida Cidade Jardim",
            "addressComplement": "",
            "addressNumber": "1",
            "zip": "01453"
          },
          {
            "label": "Casa do Bublues II",
            "pk": 110,
            "addressFormatted": "Rua Iguatemi, 1, Apto 111",
            "addressSt": "Rua Iguatemi",
            "addressComplement": "Apto 111",
            "addressNumber": "1",
            "zip": "01451"
          },
          {
            "label": "Minha casa minha vida",
            "pk": 201,
            "addressFormatted": "Rua Marieta Leitao, 161",
            "addressSt": "Rua Marieta Leitao",
            "addressComplement": null,
            "addressNumber": "161",
            "zip": "02925160"
          },
          {
            "label": "Minha casa minha vida 2",
            "pk": 140,
            "addressFormatted": "Rua Suspiro de Morango, 161 - COMPLEMENTO",
            "addressSt": "Rua Suspiro de Morango",
            "addressComplement": "COMPLEMENTO",
            "addressNumber": "161",
            "zip": "02925-160"
          }
        ]
      }
    }
  }
}
```