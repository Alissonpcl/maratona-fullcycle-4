# Maratona Full Cycle Desafio 3

Projeto desenvolvido durante a [Maratona Full Cycle 4.0](http://maratona.fullcycle.com.br/)

Contém:

1. API REST com framework NestJS;
1. ORM com TypeORM;
1. Containerização com Docker (compilar e executar o projeto )

## Comandos utilitários

Os comandos abaixo foram utilizados durante o desenvolvimento desta aplicação:

Criar migration de criação da tabela de categorias <br/>
```yarn typeorm migration:create --name CreateCategoriesTable``` 

Executar as migrations <br/>
```yarn typeorm migration:run```

Criar a classe para a entidade de categoria <br/>
```yarn typeorm entity:create -- --name="Category"```

## Consumo da API

Para executar a aplicação basta rodar o comando abaixo:

```
yarn install
yarn start:dev
```

Dentro da pasta ./restclient existem dois arquivos *.http* que podem ser utilizados para consumo da API. É possível utilizar também uma ferramenta como o Postman para o método de criação de categorias e o próprio browser para o metodo de listagem de categorias.

## Endpoints disponíveis

Endpoint | Descrição 
_________|__________
GET http://localhost:3000/categories | Lista todas as categorias já cadastradas
POST http://localhost:3000/categories | Cria uma nova categoria

> No método POST deve ser passado no corpo da requisição um json contendo o name da categoria. Ex.: {"name": "Nova categoria"}


## Docker

O arquivo **full.Dockerfile** contém o script necessário para criar uma imagem contendo todo o projeto que pode ser utilizado para o serviço subir a API na porta 3000.

Está imagem pode então ser enviada para o Dockerhub.

O arquivo padrão **Dockerfile** pode ser utilizado para fazer o build de uma imagem que irá executar o projeto a partir da pasta atual.

## Informações do desafio
> Extraído da plataforma de treinamento

Informações do desafio
Neste desafio você deverá criar uma API Rest com o Nest.js.

Devemos criar um recurso de categorias com a URI categories com dois endpoints:

- GET categories -> Consulta de categorias
-POST categories -> Criação de categorias

A aplicação terá um banco de dados SQLite para armazenar os dados, este banco ficará na raiz do projeto e usará o TypeORM para persistência dos dados.

O banco SQLite deverá estar no controle de versão da aplicação e deverá ter 10 categorias cadastradas.

Utilize o TypeORM, que é uma biblioteca Node.js para administrar a persitência de dados em banco de dados através do conceito de ORM (Object Relation Mapper).

A aplicação deverá rodar com Docker.

Dica: Veja a aula abaixo sobre API Rest Nest.js para saber como configurar o Nest.js com Docker e usar o TypeORM com banco de dados. Há um repositório Git na descrição do vídeo com um exemplo de API Rest com Nest.js usando Docker e TypeORM.
https://www.youtube.com/watch?v=BT7novtdAgI

Não use docker-compose nesta aplicação, deveremos ter apenas um Dockerfile na raiz do projeto expondo a porta 3000, que é a porta que o servidor do Nest.js para rodar a aplicação web.

Faça o docker build da aplicação para gerar sua imagem, suba-a no Docker Hub e compartilhe o endereço da imagem logo abaixo.

Boa sorte!

## Referência 
 
[Maratona Fullcycle](http://maratona.fullcycle.com.br)
