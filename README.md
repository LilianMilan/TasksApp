# 📋 TasksApp

Aplicativo mobile de gerenciamento de tarefas desenvolvido em **React Native + TypeScript**, criado durante meus estudos de desenvolvimento mobile.

> 🚧 Projeto de estudo, ainda em desenvolvimento.

## ✨ Funcionalidades

- **Autenticação**: telas de login e cadastro com validação de formulário (e-mail, senha com mínimo de 6 caracteres, nome e confirmação de senha)
- **Integração com API REST**: login e cadastro via Axios, com token JWT enviado no header `Authorization`
- **Sessão persistida**: dados do usuário salvos com AsyncStorage
- **Tela "Hoje"**: cabeçalho com imagem e botão flutuante para criar tarefas
- **Modal "Nova Tarefa"**: campo de descrição e seletor de data nativo (DateTimePicker)
- **Componentes reutilizáveis**: `AuthInput` (input com ícone) e `If` (renderização condicional)
- **Tipagem**: interfaces de props e state separadas em `src/interfaces`

## 🛠️ Tecnologias

- React Native 0.66 (CLI)
- TypeScript
- React Navigation 6 (Stack e Drawer)
- Axios
- AsyncStorage
- DateTimePicker
- Moment.js
- React Native Vector Icons
- Jest

## 📁 Estrutura

```
src/
├── components/     # AuthInput, If
├── interfaces/     # Tipagens de props e states
├── screens/        # Auth, TaskList, AddTask, Navigator
├── common.tsx      # URL do servidor e alertas
└── App.js
assets/
├── fonts/          # Lato
└── imgs/           # Imagens de fundo das telas
```

## 🚀 Como rodar

**Pré-requisitos:** ambiente React Native CLI configurado ([guia oficial](https://reactnative.dev/docs/environment-setup)), com Android Studio e emulador ou Xcode.

```bash
# Instalar dependências
yarn

# Iniciar o Metro
yarn start

# Em outro terminal, rodar no Android
yarn android

# ou no iOS
yarn ios
```

> ⚠️ Login e cadastro dependem de um backend rodando em `localhost:3000` (no emulador Android, `10.0.2.2:3000`). O backend não está incluído neste repositório.

## 🗺️ Próximos passos

- [ ] Listagem de tarefas com dados reais
- [ ] Salvar, concluir e excluir tarefas
- [ ] Filtros por período (hoje, amanhã, semana, mês)
- [ ] Menu lateral (Drawer) com dados do usuário
- [ ] Ativar o fluxo de navegação Login → Home

## 👩‍💻 Autora

**Lilian Milan**

[LinkedIn](https://www.linkedin.com/in/lilian-milan-546900135) · [GitHub](https://github.com/LilianMilan) · [Portfólio](https://portfolio-lilian.pages.dev)
