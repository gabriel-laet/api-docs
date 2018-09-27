# Authorization

Os serviços estão disponíveis em `/graphql`, usando o metodo HTTP `POST`. o exemplo abaixo é de como fazer uma request usando `curl` para obter a chave de API.
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

Tirando o login, todos os serviços são privados e precisam de `authorization` no header. O valor da chave é ```Apikey email:api_key```, abaixo um exemplo da chave e também uma chamada usando `curl`

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

Para mais detalhes sobre os recursos de autenticação, vá para [authorization resources](/other-resources/authorization).
