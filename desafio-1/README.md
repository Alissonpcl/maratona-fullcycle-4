# Maratona Full Cycle Desafio3

Projeto desenvolvido durante a [Maratona Full Cycle 4.0](http://maratona.fullcycle.com.br/)

Contém:

1. API GO
1. Dockefile com um container para rodar a aplicação;

## Endpoints disponíveis

GET http://localhost:8080

> No método POST deve ser passado no corpo da requisição um json contendo o name da categoria. Ex.: {"name": "Nova categoria"}


## Compilando API GO

```GOOS=linux GOARCH=amd64 go build .```

## Docker

Rodar o container para expor a aplicação:

```docker run -p 8080:8080 --rm desafio-1```
