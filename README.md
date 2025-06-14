README do Projeto: IonZ Teste (Sistema de Produtos)
&lt;p align="center">
&lt;a href="[link suspeito removido]" target="blank">&lt;img src="[link suspeito removido]" width="120" alt="Nest Logo" />&lt;/a>
&lt;/p>

&lt;p align="center">Um framework &lt;a href="[link suspeito removido]" target="_blank">Node.js&lt;/a> progressivo para construir aplicações server-side eficientes e escaláveis.&lt;/p>
&lt;p align="center">
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="NPM Version" />&lt;/a>
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="Package License" />&lt;/a>
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="NPM Downloads" />&lt;/a>
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="CircleCI" />&lt;/a>
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="Coverage" />&lt;/a>
&lt;a href="https://discord.gg/G7Qnnhy" target="_blank">&lt;img src="[link suspeito removido]" alt="Discord"/>&lt;/a>
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="Backers on Open Collective" />&lt;/a>
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="Sponsors on Open Collective" />&lt;/a>
&lt;a href="[link suspeito removido]" target="_blank">&lt;img src="[link suspeito removido]" alt="Donate us"/>&lt;/a>
&lt;a href="[link suspeito removido]"  target="_blank">&lt;img src="[link suspeito removido]" alt="Support us">&lt;/a>
&lt;a href="https://twitter.com/nestframework" target="_blank">&lt;img src="[link suspeito removido]" alt="Follow us on Twitter">&lt;/a>
&lt;/p>

🚀 Visão Geral
Este projeto é um sistema completo para gerenciamento de produtos, composto por um Backend (NestJS) e um Frontend (Angular com SSR). Ele se conecta a um banco de dados PostgreSQL para persistência dos dados.

Backend: Desenvolvido com NestJS, oferece uma API RESTful para realizar operações de CRUD (Criar, Ler, Atualizar, Deletar) em produtos, incluindo o upload de imagens.
Frontend: Construído com Angular e Server-Side Rendering (SSR), provê uma interface intuitiva para interagir com a API de produtos.
Banco de Dados: Utiliza PostgreSQL para a persistência dos dados dos produtos. Você precisará ter uma instância de PostgreSQL rodando localmente ou acessível.
📦 Estrutura do Projeto
O projeto é organizado da seguinte forma:

IonZ Teste/
├── api-products/           # Código-fonte do backend NestJS
│   ├── src/
│   ├── dist/               # Diretório de build do NestJS
│   ├── .env.example        # Exemplo de arquivo de variáveis de ambiente
│   └── ...
├── front-products/         # Código-fonte do frontend Angular
│   ├── src/
│   ├── dist/               # Diretório de build do Angular
│   └── ...
⚙️ Configuração e Execução do Projeto
Para colocar o projeto em funcionamento, siga os passos abaixo:

1. Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

Node.js e NPM: Necessário para construir e executar os projetos Angular e NestJS. Recomendado: Node.js 18.x ou superior. Node.js Download
PostgreSQL: O banco de dados para a aplicação. Você precisará de uma instância de PostgreSQL rodando e acessível. PostgreSQL Download
2. Configuração do Banco de Dados PostgreSQL
Certifique-se de que seu banco de dados PostgreSQL esteja rodando e que você tenha um banco de dados (product_db) e um usuário (postgres com senha root, ou suas credenciais preferidas) configurados.

As variáveis de ambiente para a conexão com o banco de dados devem ser definidas no arquivo .env do backend.

3. Preparação e Execução do Backend (api-products)
Navegue até o diretório api-products:

Bash

cd api-products
Instale as dependências:

Bash

npm install
Crie e configure o arquivo .env:
Crie um arquivo .env na raiz do diretório api-products (ou copie e renomeie o .env.example). Certifique-se de que as variáveis de ambiente para a conexão com o banco de dados estejam corretas, apontando para sua instância local de PostgreSQL:

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=product_db
Você pode ajustar DB_HOST, DB_USER, DB_PASSWORD, e DB_NAME conforme sua configuração local do PostgreSQL.

Compile o projeto NestJS:

Bash

npm run build
Este comando irá gerar os arquivos JavaScript compilados na pasta dist/.

Inicie o servidor do Backend:
Após a compilação, para executar o backend em modo de produção, o comando a ser utilizado é:

Bash

npm run start:prod
Alternativamente, para desenvolvimento (com watch mode para auto-recarregar as mudanças):

Bash

npm run start:dev
O backend estará escutando na porta 3000 por padrão.

4. Preparação e Execução do Frontend (front-products)
Em uma nova janela do terminal, navegue até o diretório front-products:

Bash

cd front-products
Instale as dependências:

Bash

npm install
Compile e inicie o projeto Angular (com SSR):

Bash

npm run build -- --configuration production --ssr
npm run serve:ssr
O primeiro comando irá compilar o frontend e os artefatos de Server-Side Rendering no diretório dist/. O segundo comando iniciará o servidor Angular com SSR.

Alternativamente, para desenvolvimento (com watch mode para auto-recarregar as mudanças):

Bash

npm run start
O frontend estará escutando na porta 4200 por padrão. Se você estiver usando o npm run serve:ssr, a porta pode ser 4000.

🌐 Acessando a Aplicação
Com ambos os servidores (backend e frontend) em execução:

Frontend (Angular): Acesse-o em seu navegador através de http://localhost:4000 (ou http://localhost:4200 se estiver usando npm run start para o frontend).
Backend (NestJS API): A API estará disponível em http://localhost:3000.
A documentação Swagger da API pode ser acessada em http://localhost:3000/api (ou a rota que você configurou para o Swagger em seu backend).
🐛 Solução de Problemas Comuns
Problemas de conexão com o banco de dados: Verifique se o seu PostgreSQL está rodando e se as variáveis de ambiente DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME no arquivo .env do backend (api-products/.env) estão configuradas corretamente para sua instância local.
Backend não inicia após npm run build: Certifique-se de que você está executando npm run start:prod (ou npm run start:dev) no diretório api-products e que o arquivo .env está presente na raiz desse diretório.
Frontend não se conecta ao backend: Verifique se o backend está realmente rodando na porta esperada (padrão 3000). Pode ser necessário ajustar a URL da API no código do frontend se o backend estiver em uma porta diferente ou em um host remoto.
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
