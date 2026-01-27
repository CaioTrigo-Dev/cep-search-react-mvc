# 📍 Busca CEP - React MVC Pattern

![Status](https://img.shields.io/badge/Status-Concluído-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![Architecture](https://img.shields.io/badge/Pattern-MVC-orange)

## 📝 Sobre o Projeto

Este projeto é uma aplicação web desenvolvida para estudar e aplicar a arquitetura **MVC (Model-View-Controller)** dentro do ecossistema **React**.

O objetivo principal foi desacoplar a lógica de negócios da interface do usuário, criando um código mais limpo, escalável e fácil de testar. A aplicação consome a API do [ViaCEP](https://viacep.com.br/) para fornecer endereços baseados no CEP digitado.

---

## 🚀 Funcionalidades

- [x] **Consulta de Endereço:** Busca automática por logradouro, bairro, cidade e estado.
- [x] **Arquitetura MVC:** Separação rígida de responsabilidades (Hooks para lógica, Componentes para visual).
- [x] **Validação de Dados:** Verificação de formato do CEP (8 dígitos numéricos) utilizando Regex e Funções Puras.
- [x] **Feedback de UX:**
  - Status de "Carregando" (Loading) para feedback imediato.
  - Tratamento de erros (CEP inválido, não encontrado ou erro de conexão).
- [x] **Máquina de Estados de Tela:** Controle de exibição condicional entre formulário, carregamento e resultado.

---

## 🏗️ Estrutura do Projeto (MVC)

A organização das pastas reflete a separação de responsabilidades do padrão MVC:

```text
src/
│
├── 📂 assets/
│   └── app.css           # Estilos globais da aplicação
│
├── 📂 components/        # (VIEW) Camada Visual "Burra"
│   ├── CepForm.js        # Formulário de entrada de dados
│   └── CepResult.js      # Exibição do resultado ou erros
│
├── 📂 hooks/             # (CONTROLLER) O "Cérebro"
│   └── useCepController.js # Regras de negócio, estados e gestão de fluxo
│
├── 📂 services/          # (MODEL) Comunicação Externa
│   └── viaCep.js         # Chamadas à API (Fetch) isoladas
│
├── 📂 utils/             # (HELPERS) Ferramentas
│   └── validators.js     # Funções puras de validação (Regex)
│
├── app.js                # Componente Raiz (Conecta View ao Controller)
└── index.js              # Ponto de Entrada (Renderiza o App no DOM)
