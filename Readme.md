# Validador de CPF

Uma biblioteca projetada para validar números de CPF usando o algoritmo de Luhn.

## Instalação

* Requer Node.JS e NPM. Caso não tenha acesse: 

    - [NODE](https://nodejs.org/en/download/) + [NPM](https://nodejs.org/en/download/)

* No terminal, siga para a pasta onde você deseja usar a biblioteca e digite:
```javascript
$ npm install la-card-validator
```

## Uso 

```javascript
const validador = require("la-validador-cpf");
validator.cpf(39784483866) // true
```


## Tecnologias

* HTML
* CSS3
* JAVASCRIPT
* NPM
* MOCHA
* CHAI
* NYC
* ESLINT

## Roteiro

### versão 3.0.0 (prevista para agosto de 2019) 
* Implementação de verificação mais abrangente, incluindo data de nascimento, status da situação cadastral (como regular, pendente de regularização, suspenso, cancelado por multiplicidade, titular falecido, cancelamento por encerramento de espólio, nulo) e código de controle de comprovante da verificação.

### versão 2.0.0 (prevista para julho de 2019) 
* Identificação de quais são os digítos verificadores e a data e hora da consulta realizada.

### versão 1.0.0 (liberado) 
* Validação pelo primeiro digíto verificador, caso não seja, o número de CPF retornará como válido ou inválido.