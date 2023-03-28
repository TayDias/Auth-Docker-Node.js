<h1 align="center"> Auth TDD/Jest/Docker Node.js</h1>

<p>Projeto desenvolvido com base em video tutorial do Youtube, com objetivo de experimentação de práticas e dos frameworks desenvolvimento descritos.</p>


# Índice

* [Status do projeto](#Status-do-projeto)
* [Tecnologias utilizadas](#Tecnologias-utilizadas)
* [Funcionalidades](#Funcionalidades)
* [Execução da aplicação](#Execução-da-aplicação)
* [Referencias](#Referencias)


# Status do projeto

🚧 Em construção... Interrompido 🚧

Motivo: Incapacidade de trabalhar com o Jest neste codigo fonte devido diversos conflitos de versão com Node.js. 
Ação necessária: Refatorar o código fonte após atualizar a versão do Node.js para uma compativel com o Jest atualmente


# Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com)
- [pgAdmin](https://www.pgadmin.org)


# Funcionalidades

- [ ] 01 - Cadastro de usuários
- [ ] 02 - Autenticação de usuários cadastrados


# Execução da aplicação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

Assim como ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Rodando o servidor

```bash
# Clone este repositório

# Acesse a pasta do projeto através do editor

# Instale as dependências do projeto pelo terminal
$ npm install --global yarn
$ yarn add express
$ yarn add sequelize pg
$ yarn add sequelize-cli -D
$ yarn add nodemon -D

# Configure a base de dados conforme o arquivo "config/database.js"

# Execute as migrations
$ yarn sequelize db:migrate

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```


# Referencias

Como escrever um README incrível no seu Github:
https://www.alura.com.br/artigos/escrever-bom-readme

Como fazer um bom README:
https://blog.rocketseat.com.br/como-fazer-um-bom-readme/

Docker overview:
https://docs.docker.com/get-started/overview/

How To Install Node.js on Ubuntu 20.04:
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

Install Docker Desktop on Ubuntu:
https://docs.docker.com/desktop/install/ubuntu/

Testes no NodeJS aplicando TDD com Jest | Diego Fernandes: 
https://www.youtube.com/watch?v=2G_mWfG0DZE