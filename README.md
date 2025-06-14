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
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollecting.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

---

## README do Projeto: IonZ Teste (Sistema de Produtos)

### 🚀 Visão Geral

Este projeto é um sistema completo para gerenciamento de produtos, demonstrando a integração de um **Backend (NestJS)**, um **Frontend (Angular com SSR)** e um banco de dados **PostgreSQL**, todos orquestrados via Docker Compose.

-   **Backend:** Desenvolvido com **NestJS**, oferece uma API RESTful para realizar operações de CRUD (Criar, Ler, Atualizar, Deletar) em produtos, incluindo o **upload de imagens**.
-   **Frontend:** Construído com **Angular e Server-Side Rendering (SSR)**, provê uma interface intuitiva para interagir com a API de produtos.
-   **Banco de Dados:** Utiliza **PostgreSQL** para a persistência dos dados dos produtos.

---

### 📦 Estrutura do Projeto

O projeto é organizado da seguinte forma:

IonZ Teste/
├── api-products/           # Código-fonte do backend NestJS
│   ├── src/
│   ├── dist/               # Diretório de build do NestJS
│   ├── .env.example        # Exemplo de arquivo de variáveis de ambiente
│   ├── Dockerfile          # Dockerfile para o backend
│   └── ...
├── front-products/         # Código-fonte do frontend Angular
│   ├── src/
│   ├── dist/               # Diretório de build do Angular
│   ├── Dockerfile          # Dockerfile para o frontend
│   └── ...
└── docker-compose.yml      # Arquivo de configuração do Docker Compose


---

### ⚙️ Configuração e Execução do Projeto

Para colocar o projeto em funcionamento, siga os passos abaixo:

#### 1. Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

* **Docker:** Essencial para a orquestração dos serviços. [Guia de Instalação do Docker](https://docs.docker.com/get-docker/)
* **Docker Compose:** Usado para definir e executar aplicações Docker multi-container. Geralmente incluído na instalação do Docker Desktop. Se não, [instale o Docker Compose](https://docs.docker.com/compose/install/).
* **Node.js e NPM:** Necessário para construir os projetos Angular e NestJS localmente. Recomendado: Node.js 18.x ou superior. [Node.js Download](https://nodejs.org/en/download/)

#### 2. Preparação do Backend (`api-products`)

Navegue até o diretório `api-products`:

```bash
cd api-products
Instale as dependências:

Bash

npm install
Compile o projeto NestJS:

Bash

npm run build
Este comando irá gerar os arquivos JavaScript compilados na pasta dist/.

Copie o arquivo de ambiente (.env):
Para que o backend possa se conectar corretamente ao banco de dados e outras configurações, é necessário copiar seu arquivo de ambiente (.env) para dentro da pasta dist/.

Bash

cp .env.example dist/.env # Ou 'cp .env dist/.env' se você já tem um .env configurado
Verifique as variáveis de ambiente em seu .env dentro de api-products. Elas devem corresponder às configurações do docker-compose.yml para o serviço de banco de dados, por exemplo:

DB_HOST=database
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=product_db
3. Preparação do Frontend (front-products)
Navegue até o diretório front-products:

Bash

cd ../front-products
Instale as dependências:
Bash

npm install
Compile o projeto Angular (com SSR):
Bash

npm run build -- --configuration production --ssr
Este comando irá compilar o frontend e os artefatos de Server-Side Rendering no diretório dist/.
🚀 Executando a Aplicação com Docker Compose
Após configurar o backend e o frontend, volte para o diretório raiz do projeto (onde o docker-compose.yml está localizado):

Bash

cd ..
Limpe containers e imagens antigas (recomendado para a primeira execução ou para resolver problemas):
Bash

docker-compose down --volumes --rmi all
Construa as imagens Docker e inicie os serviços:
Bash

docker-compose up --build --abort-on-container-exit
Este comando realizará os seguintes passos:
Construirá as imagens Docker para os serviços de backend e frontend, utilizando os Dockerfiles específicos.
Iniciará os três serviços na ordem correta: database, backend e frontend.
O processo será abortado se qualquer container falhar na inicialização.
🌐 Acessando a Aplicação
Com todos os serviços em execução, você poderá acessar a aplicação:

Frontend (Angular): Acesse-o em seu navegador através de http://localhost:4000.
Backend (NestJS API): A API estará disponível em http://localhost:3000.
A documentação Swagger da API pode ser acessada em http://localhost:3000/api (ou a rota que você configurou para o Swagger em seu backend).
🐛 Solução de Problemas Comuns
Error: Cannot find module '/app/server/main.js' no frontend: Certifique-se de que o comando command: ["node", "server/main.js"] no seu docker-compose.yml corresponde ao arquivo JavaScript de entrada do seu servidor Angular SSR após a compilação. Verifique seu angular.json para o outputPath e o main da configuração server. Se o nome do arquivo final for main.server.mjs, ajuste o command para ["node", "server/main.server.mjs"].
ReferenceError: crypto is not defined no backend: Este problema foi resolvido ao garantir que o Dockerfile do backend utilize uma imagem base como node:18-slim e que openssl seja instalado via apt-get. Executar a limpeza e reconstrução completa (docker-compose down --volumes --rmi all e docker-compose up --build) deve resolver isso.
Problemas de conexão com o banco de dados: Verifique as variáveis de ambiente DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME tanto no docker-compose.yml quanto no arquivo .env localizado dentro da pasta dist do backend. O DB_HOST deve ser database (que é o nome do serviço do PostgreSQL no Docker Compose).
📚 Recursos
Confira alguns recursos que podem ser úteis ao trabalhar com NestJS:

Visite a Documentação do NestJS para aprender mais sobre o framework.
Para perguntas e suporte, visite nosso canal Discord.
Para aprofundar e obter mais experiência prática, confira nossos cursos oficiais em vídeo.
Implante sua aplicação no AWS com a ajuda do NestJS Mau em apenas alguns cliques.
Visualize o grafo da sua aplicação e interaja com a aplicação NestJS em tempo real usando o NestJS Devtools.
Precisa de ajuda com seu projeto (meio período ou tempo integral)? Confira nosso suporte empresarial oficial.
Para ficar por dentro e receber atualizações, siga-nos no X (Twitter) e LinkedIn.
Procurando um emprego, ou tem uma vaga a oferecer? Confira nosso quadro de empregos oficial.
❤️ Apoie
Nest é um projeto de código aberto licenciado pelo MIT. Ele pode crescer graças aos patrocinadores e ao apoio de incríveis contribuidores. Se você gostaria de se juntar a eles, por favor, leia mais aqui.

📬 Mantenha Contato
Autor - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework
📄 Licença
Nest está licenciado sob a licença MIT.
