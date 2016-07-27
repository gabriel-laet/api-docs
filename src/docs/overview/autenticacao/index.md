Autenticação
============

Todas as requisições, exceto, é claro, as de login e logout deverão estar
autenticadas. A autenticação é feita através de um cabeçalho da requisição.
O cabeçalho se chama "Authorization"  e seu conteudo deve ser:

  ApiKey [email da conta]:[chave da API da conta]

Por exemplo, para um usuario com email de arthur@loggi.com e chave de api de
1234 o cabeçalho será::

  ApiKey arthur@loggi.com:1234
