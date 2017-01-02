# Authorization

All services is hosted in path `/public-graphql` using HTTP verb `POST`, bellow is available a sample of a request using `curl` to create a authorization:

```
$ curl -v 'https://staging.loggi.com/graphql?' \
>     -H 'content-type: application/json;charset=UTF-8' \
>     --compressed \
>     --data-binary '{"query":"mutation { login(input:{email: \"a-valid-username@domain.com\", token: \"a-valid-token\" }) { user { apiKey } } }"}'
> POST /graphql? HTTP/1.1
> Host: staging.loggi.com
> content-type: application/json
>
< HTTP/1.1 200 OK
< Content-Type: application/json
<
{"data":{"login":{"user":{"apiKey":"a-valid-api-key"}}}}
```

Excluding login, all services is private and requires the usage of a HTTP Header called `ApiKey` that is composed as:

> ApiKey a-valid-email@domain.ext:a-valid-api-key

For example, a `curl` call to list cities:

```
$ curl -v 'https://staging.loggi.com/graphql?' \
>     -H 'content-type: application/json' \
>     -H 'ApiKey felipe.martins@loggi.com:5f459addf748f2a94da12a9f2c3211b64b38f6aa' \
>     --compressed \
>     --data-binary '{"query":"query { allCities { edges { node { pk name slug } } } }"}'
>
> POST /graphql? HTTP/1.1
> Host: staging.loggi.com
> content-type: application/json
> ApiKey a-valid-username@domain.com:a-valid-api-key
>
< HTTP/1.1 200 OK
< Content-Type: application/json
<
{"data":{"allCities":{"edges":[{"node":{"pk":4,"name":"Curitiba","slug":"ct"}},{"node":{"pk":1,"name":"S\u00e3o Paulo","slug":"sp"}},{"node":{"pk":2,"name":"Rio de Janeiro","slug":"rj"}},{"node":{"pk":3,"name":"Belo Horizonte","slug":"bh"}},{"node":{"pk":5,"name":"Porto Alegre","slug":"pa"}}]}}}
```

For more details about authentication services, go to [authorization resource](/resources/authorization).