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
