# Maratona Full Cycle Desafio 1

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

## Informações do desafio
> Extraído da plataforma de treinamento

Informações do desafio
Durante toda a Maratona utilizaremos containers como base de desenvolvimento bem como para produção. Logo, ter uma noção básica de Docker é mais do que necessário.

Nesse desafio, você terá de criar uma imagem docker que quando executada deverá expor a porta 8080 exibindo a mensagem: Eu sou Full Cycle.
Fique na liberdade para utilizar a tecnologia/linguagem de programação de sua escolha. Exemplo: você poderá criar uma simples aplicação usando Node.js com Express para exibir essa mensagem.
Gere o build da sua imagem, faça o push para o DockerHub e a informe no formulário abaixo.

Se você nunca teve nenhuma experiência com docker, recomendamos que assista a seguinte aula: https://www.youtube.com/watch?v=yb2udL9GG2U

## Referência 
 
[Maratona Fullcycle](http://maratona.fullcycle.com.br)
