<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

Descrição
Este é o repositório inicial para o projeto IonZ Teste (Sistema de Produtos), que demonstra uma aplicação completa com:

Backend: Desenvolvido com NestJS, oferece uma API RESTful para operações de CRUD (Criar, Ler, Atualizar, Deletar) de produtos, incluindo a funcionalidade de upload de imagens.
Frontend: Construído com Angular e SSR (Server-Side Rendering), provê uma interface de usuário rica e performática para interagir com a API de produtos.
Banco de Dados: Utiliza PostgreSQL para persistência de dados.
Configuração do Projeto
Para configurar e rodar este projeto em seu ambiente local (sem Docker), siga os passos abaixo:

Pré-requisitos
Certifique-se de que você tem as seguintes ferramentas instaladas em seu sistema:

Node.js e NPM: Necessário para construir e executar tanto o backend NestJS quanto o frontend Angular. Recomendamos a versão 18.x ou superior do Node.js. Você pode baixá-lo em Node.js Download.
PostgreSQL: O banco de dados para a aplicação. Você precisará ter uma instância de PostgreSQL rodando localmente e acessível. Baixe-o em PostgreSQL Download.
1. Configuração do Banco de Dados PostgreSQL
Certifique-se de que sua instância de PostgreSQL esteja em execução.
Crie um banco de dados chamado product_db (ou o nome que preferir) e configure um usuário com permissões de acesso (ex: postgres com a senha root). Estas credenciais serão usadas pelo backend para se conectar.

2. Configuração e Execução do Backend (api-products)
Navegue até o diretório api-products:

Bash

cd api-products
Instale as dependências:

Bash

$ npm install
Copie o arquivo .env:
Após a instalação das dependências, você precisa copiar o arquivo .env para a pasta dist. Este arquivo contém as variáveis de ambiente necessárias para a conexão com o banco de dados.

Bash

$ cp .env dist/.env
Importante: Certifique-se de que o seu .env na raiz de api-products esteja configurado corretamente para sua instância local de PostgreSQL, por exemplo:

Ini, TOML

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=product_db
Lembre-se de adaptar estes valores conforme a sua configuração real do PostgreSQL.

Compile o projeto NestJS:

Bash

$ npm run build
Este comando irá compilar o código TypeScript para JavaScript e salvar os arquivos na pasta dist/.

Inicie o servidor do Backend:
Para executar o backend em modo de produção:

Bash

$ npm run start:prod
Para desenvolvimento (com watch mode, que recarrega as mudanças automaticamente):

Bash

$ npm run start:dev
O backend estará ativo na porta 3000 por padrão.

3. Configuração e Execução do Frontend (front-products)
Abra uma nova janela do terminal e navegue até o diretório front-products:

Bash

cd front-products
Instale as dependências:

Bash

$ npm install
Compile e inicie o projeto Angular (com SSR):

Bash

$ npm run build -- --configuration production --ssr
$ npm run serve:ssr
O primeiro comando compilará o frontend e os artefatos do Server-Side Rendering na pasta dist/. O segundo comando iniciará o servidor Angular com SSR.

Para desenvolvimento (com watch mode):

Bash

$ npm run start
O frontend estará ativo na porta 4000 por padrão ao usar serve:ssr. Se você usar npm run start, a porta padrão é 4200.

Acessando a Aplicação
Com ambos os servidores (backend e frontend) em execução:

Frontend (Angular): Acesse a interface do usuário em seu navegador através de http://localhost:4000 (ou http://localhost:4200 se estiver usando npm run start para o frontend).
Backend (NestJS API): A API estará disponível em http://localhost:3000.
Você pode acessar a documentação Swagger da API em http://localhost:3000/api.
Solução de Problemas Comuns
Problemas de conexão com o banco de dados:
Verifique se sua instância de PostgreSQL está realmente rodando.
Confira se as variáveis de ambiente (DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME) no arquivo .env que foi copiado para a pasta dist do backend (api-products/dist/.env) estão configuradas corretamente para sua instância local de PostgreSQL.
Backend não inicia após npm run build:
Certifique-se de estar executando npm run start:prod (ou npm run start:dev) a partir do diretório api-products.
Confirme que o arquivo .env foi copiado corretamente para a pasta dist e que as permissões de leitura estão corretas.
Frontend não se conecta ao backend:
Verifique se o backend está realmente rodando e acessível na porta esperada (padrão 3000).
Pode ser necessário ajustar a URL da API no código do frontend se o backend estiver em uma porta diferente ou em um host remoto.
Rodar testes
Bash

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
Deployment
When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the deployment documentation for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out Mau, our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

Bash

$ npm install -g mau
$ mau deploy
With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

Resources
Check out a few resources that may come in handy when working with NestJS:

Visit the NestJS Documentation to learn more about the framework.
For questions and support, please visit our Discord channel.
To dive deeper and get more hands-on experience, check out our official video courses.
Deploy your application to AWS with the help of NestJS Mau in just a few clicks.
Visualize your application graph and interact with the NestJS application in real-time using NestJS Devtools.
Need help with your project (part-time to full-time)? Check out our official enterprise support.
To stay in the loop and get updates, follow us on X and LinkedIn.
Looking for a job, or have a job to offer? Check out our official Jobs board.
Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more here.

Stay in touch
Author - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework
License
Nest is MIT licensed.
