# MyWallet Back

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/PedroPiacentini/projeto14-mywallet-back/blob/main/LICENSE)

Descrição curta do projeto.

## Instalação

Certifique-se de ter o Node.js instalado. Clone o repositório e execute os seguintes comandos:

```bash
npm install
npm start
```

## Uso

Essa API é consumida pelo front end do MyWallet

- **Cadastro de usuário** `/cadastro`
    - Realiza o cadastro atravéz de uma requisição POST

- **Login de usuário** `/`
    - Realiza o login atravéz de uma requisição POST

- **Adicionar operações de entrada e saída** `/nova-transacao/:tipo`
    - Adiciona transações do tipo `"entrada"` ou `"saida"` atravéz de uma requisição POST

- **Listar operações** `/home`
    - Lista as transações do usuário atravéz de uma requisição GET

 ## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Joi**
- **Day.js**
- **Dotenv**
- **Cors**


