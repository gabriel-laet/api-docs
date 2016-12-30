Autenticação
============

Todas as requisições, exceto, é claro, as de login e logout deverão estar
autenticadas. A autenticação é feita através de um cabeçalho da requisição.
O cabeçalho se chama "Authorization"  e seu conteudo deve ser:

  ApiKey [email da conta]:[chave da API da conta]

Por exemplo, para um usuario com email de arthur@loggi.com e chave de api de
1234 o cabeçalho será::

  ApiKey arthur@loggi.com:1234


###########################


### Getting access

A credential is dedicated to a determined environment, manage with prudential to avoid security failures or undesired invoices (e.g: because a developer asked a real ride in a test).

#### Create credential

To create a credential, logged into your account, access the desired environment using one option bellow and follow the page instructions.

 - For Sandbox: [https://staging.loggi.com/contas/haxor/](https://staging.loggi.com/contas/haxor/)
 - For Production: [https://loggi.com/contas/haxor/](https://loggi.com/contas/haxor/)
