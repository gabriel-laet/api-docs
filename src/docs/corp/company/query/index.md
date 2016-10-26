# Company - Queries

## Company information
The information about company is retrieved by user (if user is a corporate user).
```
query{
  user{
   company{
      addressFormatted
      addressSt
      addressComplement
      addressNumber
      zip
      landline1
      landline2
      cnpj
    }
  }
}
```

**JSON**
```
{
  "data": {
    "user": {
      "company": {
        "addressFormatted": "Alameda Grajaú, 248 - Condominio empresarial 2",
        "addressSt": "Alameda Grajaú",
        "addressComplement": "Condominio empresarial 2",
        "addressNumber": "248",
        "zip": "064540-050",
        "landline1": "2732266312",
        "landline2": "2730760335",
        "cnpj": "71153678000152"
      }
    }
  }
}
```