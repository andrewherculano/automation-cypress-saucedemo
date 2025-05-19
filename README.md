# 🚀 Automação de Testes - SauceDemo com Cypress

Este projeto contém testes automatizados end-to-end para o site SauceDemo utilizando o framework Cypress. Os testes cobrem os principais fluxos de usuário, garantindo a qualidade e confiabilidade da aplicação.

## 📋 Funcionalidades Testadas

- Login de usuário
- Navegação e listagem de produtos
- Adição de produtos ao carrinho
- Remoção de produtos do carrinho
- Finalização de compra
- Validação de preços e totais
- Verificação de informações do pedido

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automação de testes
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação
- [Node.js](https://nodejs.org/) - Ambiente de execução

## ⚙️ Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/automation-cypress-saucedemo.git
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 🧪 Executando os Testes

Para executar os testes em modo interativo:
```bash
npx cypress open
```

Para executar os testes em modo headless:
```bash
npx cypress run
```

## 📁 Estrutura do Projeto

```
automation-cypress-saucedemo/
├── cypress/
│   ├── e2e/           # Testes end-to-end
│   ├── fixtures/      # Dados de teste
│   └── support/       # Configurações e comandos personalizados
├── cypress.config.js  # Configuração do Cypress
└── package.json       # Dependências e scripts
```

## 🔄 Workflow

O projeto utiliza GitHub Actions para automação de CI/CD. O workflow está configurado para:

- Executar os testes automaticamente em cada push
- Executar os testes em diferentes navegadores
- Gerar relatórios de execução
- Validar a qualidade do código

O workflow pode ser encontrado em `.github/workflows/cypress.yml`

## ✨ Autores

- Andrew Silva - [@andrewherculano](https://github.com/andrewherculano)
