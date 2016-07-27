
Ambientes
=========

Disponibizamos um ambiente de homologação, no qual você pode e deve testar a sua integração.

Algumas observações sobre esse ambiente:

- Embora tentemos manter um uptime de 100%, podemos ter outages curtos, em função da execução de outros testes e releases.
- Ele é um ambiente não transacional. Apesar de funcional nenhuma cobrança é feita. Ou seja, você pode usá-lo sem medo de incorrer em custos reais.
- O ambiente **não** dispara emails.
- Em casos raros podemos zerar ou modificar o banco inteiro. Ou seja, é possível que você tenha que fazer o seu setup mais de uma vez (como criação de contas, etc). Trata-se de um evento raro, mas é possível que ocorra durante seus testes.



Em staging todas as URIs serão:
https://staging.loggi.com/[ path da URI]

Produção tem como base:
https://www.loggi.com/[ path da URI]
