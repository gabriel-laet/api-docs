# HTTP request examples

All services is hosted in path `/public-graphql` of HTTP verb `POST`, bellow is available a sample of a request using `curl` to create a authorization:

```
curl -v -X POST https://staging.loggi.com/public-graphql \
    -H 'content-type: application/json;charset=UTF-8' \
    --data-binary '{"query":"mutation { login(input:{ email: "a-valid-email@domain.ext", token: "a-valid-credential", }) { user { api_key } } } }'


    --data  '
    {
        "query":"
            mutation {
              login(input:{
                email: "a-valid-email@domain.ext",
                token: "a-valid-credential",
              }) {
                user {
                    api_key
                }
              }
            }
        "
    }
    '

{"errors":[{"message":"POST body sent invalid JSON."}]}fmartins@L262:/opt/loggi/loggi/src/docs/overview(fcm-doc-graphql)$     --data  '{"query":"mutattoken: "a-valid-credential" }) { user { api_key } } " }'

```

Excluding login, all services is private and requires the usage of a HTTP Header called `ApiKey` that is composed as:

> ApiKey a-valid-email@domain.ext:a-valid-token

For example, a `curl` call to list cities:

```
TODO (fcm) Add curl example


query {
  allCities {
    edges {
      node {
        pk
        name
        slug
      }
    }
  }
}

```

For more details about authentication services, go to [xxx](x).