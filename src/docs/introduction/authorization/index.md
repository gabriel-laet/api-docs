# Authorization

All services are hosted in the path `/public-graphql`, using HTTP verb `POST`. The sample bellow is an example of a request using `curl` to create a authorization:

```
$ curl -v 'https://staging.loggi.com/graphql?' \
>     -H 'content-type: application/json;charset=UTF-8' \
>     --compressed \
>     --data-binary '{"query":"mutation { login(input:{email: \"a-valid-username@domain.com\", password: \"a-valid-password\" }) { user { apiKey } } }"}'
> POST /graphql? HTTP/1.1
> Host: staging.loggi.com
> content-type: application/json
>
< HTTP/1.1 200 OK
< Content-Type: application/json
<
{"data":{"login":{"user":{"apiKey":"a-valid-api-key"}}}}
```

Except for the login, all services are private and require the usage of the HTTP Header `authorization`. Its value is composed by the string "ApiKey" followed by a space and the email address followed by the apiKey returned above, separated by a colon:

> authorization: ApiKey a-valid-email@domain.ext:a-valid-api-key

For example, a `curl` call to list cities:

```
$ curl -v 'https://staging.loggi.com/graphql?' \
>     -H 'content-type: application/json' \
>     -H 'authorization: ApiKey a-valid-username@domain.com:a-valid-api-key' \
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

For more details about the authentication services, go to [authorization resource](/other-resources/authorization).
