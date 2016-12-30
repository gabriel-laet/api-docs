
Ambientes
=========

Disponibizamos um ambiente de homologação, no qual você pode e deve testar a sua integração.

Algumas observações sobre esse ambiente:

- Embora tentemos manter um uptime de 100%, podemos ter outages curtos, em função da execução de outros testes e releases.
- Ele é um ambiente não transacional. Apesar de funcional nenhuma cobrança é feita. Ou seja, você pode usá-lo sem medo de incorrer em custos reais.
- O ambiente **não** dispara emails.
- Em casos raros podemos zerar ou modificar o banco inteiro. Ou seja, é possível que você tenha que fazer o seu setup mais de uma vez (como criação de contas, etc). Trata-se de um evento raro, mas é possível que ocorra durante seus testes.

########################

# Environments

In first of all, you need to setup a [configuration management](#) support in your application to turn on possible alternate between our sandbox (for tests) and production (real world) when you perform operations against Loggi API.

### Sandbox environment

Is maintained for development purposes, you can use as you go without be charged (because the service is not real). But, pay attention to details bellow:

 - no e-mails will be send.

> Entry-point: [https://staging.loggi.com/public-graphql](https://staging.loggi.com/public-graphql)

### Production environment

Is real world, all operations will be charged and service executed following [terms of contract](#).

>  Entry-point: [https://www.loggi.com/public-graphql](https://www.loggi.com/public-graphql)


> XXX (sec) Must we implement a ACL policy to protect production from undesired access?
> **Maybe, we will need to separate the api in a sub-domain!**

> XXX (sec) We need to accept requests only of authorized domains (use SPF DNS Entry).
