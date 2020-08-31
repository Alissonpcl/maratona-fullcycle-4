# Maratona Full Cycle 4.0

Este repositório contém os projetos desenvolvidos durante o treinamento  [Maratona Full Cycle 4.0](http://maratona.fullcycle.com.br/).


## Comandos úteis

### Estilizar o login do Keycloak

1. Copiar o template que já existe para fora do container:
```
    #Copia para uma pasta local themes
    docker cp id_container:/opt/jboss/keycloak/themes ./themes
```

2.  Deixar apenas o template que quer utilizar
 1. **Base** não possui estilização, pode ser mais fácil para estilizar
