## Descrição

O projeto passin É um projeto criado no evento NLW Unite Ocorrido entre os dias 1 e 4 de abril de 2024 na trilha de Node.js. Este projeto visa a construção de uma API Rest para a criação de eventos, estes eventos podem ser acessados por participantes que se cadastram no evento e realizam um check-in. O projeto foi construido durante os 3 dias de eventos. 


## Pré-requisitos

Antes de iniciar, é necessário ter o [Node.js](https://nodejs.org/en/download) instalado na sua maquina, Além disso, é recomendável ter um editor de código como o [VSCode](https://code.visualstudio.com/), para facilitar o trabalho com o código.

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Weslley049/PassIn>

# Acesse a pasta do projeto no terminal/cmd
$ cd passin

# Altere o arquivo .env para apontar para o seu banco e depois migre os dados das tabelas do banco

#Para migrar as tabelas do banco utilize o comando:
$ npx db:migrate


# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm rum dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333/docs>

```
### 🛠 Tecnologias Utilizadas

As seguintes ferramentas foram usadas na construção do projeto:
- [Fastify](https://fastify.dev/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Swagger](https://swagger.io/)
- [Prisma](https://www.prisma.io/)
- [Fastify-swagger-ui](https://github.com/Weslley049/fastify-swagger-ui)
- [Fastify-Cors](https://github.com/Weslley049/fastify-cors)
- [Fastify-type-provider-zod](https://www.npmjs.com/package/fastify-type-provider-zod)
- [tsup](https://github.com/egoist/tsup)


### Status do Projeto 
<h4> 
	Projeto já pode ser utilizado. Esperando novas funcionalidades 🚀 
</h4>

