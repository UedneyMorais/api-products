README do Projeto: IonZ Teste (Sistema de Produtos)
&lt;p align="center">
&lt;a href="[link suspeito removido]" target="blank">&lt;img src="[link suspeito removido]" width="120" alt="Nest Logo" />&lt;/a>
&lt;/p>

&lt;p align="center">A progressive &lt;a href="http://nodejs.org" target="_blank">Node.js&lt;/a> framework for building efficient and scalable server-side applications.&lt;/p>
&lt;p align="center">
&lt;a href="https://www.npmjs.com/~nestjscore" target="_blank">&lt;img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />&lt;/a>
&lt;a href="https://www.npmjs.com/~nestjscore" target="_blank">&lt;img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />&lt;/a>
&lt;a href="https://www.npmjs.com/~nestjscore" target="_blank">&lt;img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />&lt;/a>
&lt;a href="https://circleci.com/gh/nestjs/nest" target="_blank">&lt;img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />&lt;/a>
&lt;a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank">&lt;img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" />&lt;/a>
&lt;a href="https://discord.gg/G7Qnnhy" target="_blank">&lt;img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/>&lt;/a>
&lt;a href="https://opencollective.com/nest#backer" target="_blank">&lt;img src="https://opencollecting.com/nest/backers/badge.svg" alt="Backers on Open Collective" />&lt;/a>
&lt;a href="https://opencollective.com/nest#sponsor" target="_blank">&lt;img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" />&lt;/a>
&lt;a href="https://paypal.me/kamilmysliwiec" target="_blank">&lt;img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/>&lt;/a>
&lt;a href="https://opencollective.com/nest#sponsor"  target="_blank">&lt;img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us">&lt;/a>
&lt;a href="https://twitter.com/nestframework" target="_blank">&lt;img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&amp;label=Follow" alt="Follow us on Twitter">&lt;/a>
&lt;/p>

Descrição
Este é um sistema completo para gerenciamento de produtos, composto por um Backend (NestJS) e um Frontend (Angular com Server-Side Rendering). O projeto interage com um banco de dados PostgreSQL para persistência de dados.

Backend: Desenvolvido com NestJS, ele expõe uma API RESTful completa para operações de CRUD (Criar, Ler, Atualizar, Deletar) de produtos, incluindo a funcionalidade de upload de imagens.
Frontend: Construído com Angular e SSR (Server-Side Rendering), oferece uma interface de usuário rica e performática para interagir com a API de produtos.
Banco de Dados: Utiliza PostgreSQL para armazenar as informações dos produtos. Você precisará ter uma instância de PostgreSQL rodando localmente ou em um servidor acessível.
Configuração e Execução do Projeto
Para colocar o projeto em funcionamento em seu ambiente local, siga as instruções abaixo:

Pré-requisitos
Antes de iniciar, certifique-se de que você tem as seguintes ferramentas instaladas em seu sistema:

Node.js e NPM: Necessário para construir e executar tanto o backend NestJS quanto o frontend Angular. Recomendamos a versão 18.x ou superior do Node.js. Você pode baixá-lo em Node.js Download.
PostgreSQL: O banco de dados para a aplicação. Você precisará ter uma instância de PostgreSQL rodando localmente e acessível. Baixe-o em PostgreSQL Download.
1. Configuração do Banco de Dados PostgreSQL
Certifique-se de que sua instância de PostgreSQL esteja em execução.
Crie um banco de dados chamado product_db (ou o nome que preferir) e configure um usuário com permissões de acesso, por exemplo, postgres com a senha root. Estas credenciais serão usadas pelo backend para se conectar.

2. Configuração e Execução do Backend (api-products)
Navegue até o diretório do backend:

Bash

cd api-products
Instale as dependências:

Bash

npm install
Crie e configure o arquivo .env:
Crie um arquivo chamado .env na raiz do diretório api-products. Você pode usar o .env.example como base. Certifique-se de que as variáveis de ambiente para a conexão com o banco de dados estejam configuradas corretamente para sua instância local de PostgreSQL:

Ini, TOML

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=product_db
Atenção: Adapte os valores de DB_HOST, DB_USER, DB_PASSWORD e DB_NAME conforme a sua configuração real do PostgreSQL.

Compile o projeto NestJS:

Bash

npm run build
Este comando irá compilar o código TypeScript para JavaScript e salvar os arquivos na pasta dist/.

Inicie o servidor do Backend:
Após a compilação, para executar o backend em modo de produção:

Bash

npm run start:prod
Para desenvolvimento (com watch mode, que recarrega as mudanças automaticamente):

Bash

npm run start:dev
O backend estará ativo na porta 3000 por padrão.

3. Configuração e Execução do Frontend (front-products)
Abra uma nova janela do terminal e navegue até o diretório do frontend:

Bash

cd front-products
Instale as dependências:

Bash

npm install
Compile e inicie o projeto Angular (com SSR):

Bash

npm run build -- --configuration production --ssr
npm run serve:ssr
O primeiro comando compilará o frontend e os artefatos do Server-Side Rendering na pasta dist/. O segundo comando iniciará o servidor Angular com SSR.

Para desenvolvimento (com watch mode):

Bash

npm run start
O frontend estará ativo na porta 4000 por padrão ao usar serve:ssr. Se você usar npm run start, a porta padrão é 4200.

Acessando a Aplicação
Com ambos os servidores (backend e frontend) em execução:

Frontend (Angular): Acesse a interface do usuário em seu navegador através de http://localhost:4000 (ou http://localhost:4200 se estiver usando npm run start para o frontend).
Backend (NestJS API): A API estará disponível em http://localhost:3000.
Você pode acessar a documentação Swagger da API em http://localhost:3000/api (ou a rota que você configurou para o Swagger em seu backend).
Solução de Problemas Comuns
Problemas de conexão com o banco de dados:
Verifique se sua instância de PostgreSQL está realmente rodando.
Confira se as variáveis de ambiente (DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME) no arquivo .env do backend (api-products/.env) estão configuradas corretamente para sua instância local de PostgreSQL.
Backend não inicia após npm run build:
Certifique-se de estar executando npm run start:prod (ou npm run start:dev) a partir do diretório api-products.
Confirme que o arquivo .env está presente na raiz do diretório api-products e que as permissões de leitura estão corretas.
Frontend não se conecta ao backend:
Verifique se o backend está realmente rodando e acessível na porta esperada (padrão 3000).
Pode ser necessário ajustar a URL da API no código do frontend se o backend estiver em uma porta diferente ou em um host remoto.
Recursos
Confira alguns recursos que podem ser úteis ao trabalhar com NestJS:

Visite a Documentação do NestJS para aprender mais sobre o framework.
Para perguntas e suporte, visite nosso canal Discord.
Para aprofundar e obter mais experiência prática, confira nossos cursos oficiais em vídeo.
Implante sua aplicação no AWS com a ajuda do NestJS Mau em apenas alguns cliques.
Visualize o grafo da sua aplicação e interaja com a aplicação NestJS em tempo real usando o NestJS Devtools.
Precisa de ajuda com seu projeto (meio período ou tempo integral)? Confira nosso suporte empresarial oficial.
Para ficar por dentro e receber atualizações, siga-nos no X (Twitter) e LinkedIn.
Procurando um emprego, ou tem uma vaga a oferecer? Confira nosso quadro de empregos oficial.
Apoie
Nest é um projeto de código aberto licenciado pelo MIT. Ele pode crescer graças aos patrocinadores e ao apoio de incríveis contribuidores. Se você gostaria de se juntar a eles, por favor, leia mais aqui.

Mantenha Contato
Autor - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework
Licença
Nest está licenciado sob a licença MIT.
