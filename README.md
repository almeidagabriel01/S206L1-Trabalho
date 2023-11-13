# Cypress com Mochawesome para Testes E2E

Este projeto foi feito por Gabriel Almeida e Vitor Oliveira e consiste em testes E2E (End-to-End) implementados usando Cypress para um site web específico (Wikipedia). Utiliza-se o Mochawesome como gerador de relatórios para fornecer uma visão detalhada dos resultados dos testes. Os testes incluem várias funcionalidades do site, como busca de itens, navegação em páginas e interações com elementos da página.

## Configuração Inicial

Siga estas instruções para configurar o projeto em sua máquina local.

```
# Clone o repositório
git clone git@github.com:almeidagabriel01/S206L1-Trabalho.git

# Navegue até o diretório do projeto
cd S206L1-Trabalho

# Instale as dependências
npm install
```

# Configuração do Cypress e Mochawesome
Aqui está um exemplo da configuração do Cypress e Mochawesome usada neste projeto (cypress.config.js):

```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vhyt4z',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  },
});
```

# Executando os Testes
Execute os testes e gere relatórios com o Mochawesome usando o seguinte comando:
```
npx cypress run
```


# Fazendo merge dos arquivos .json gerados (Após a execução dos testes):
Após rodar os testes, execute o seguinte comando para fazer um merge dos relatórios:
```
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json 
```

## Os relatórios JSON estarão disponíveis em:
/mochawesome.json