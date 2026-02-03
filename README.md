This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Configuração inicial

```bash
1. npm install
```

## Inicialiação

```bash
1. npm run dev
2. Abrir [http://localhost:3000](http://localhost:3000) 
```

## Testes

```bash
1. npm install
2. npm run storybook
3. Abrir [http://localhost:6006](http://localhost:6006) 
4. Rodar testes
```

## Estrutura de pastas
    - app: Página principal
    - components: Componentização da tela
    - constants: Constantes usadas nos componentes como espaçamento e fonte
    - hooks: Hooks de dados separados da estrutura do componente
    - masks: Máscaras para exibição de dados
    - services: Abstração de pacotes
    - stories: Casos de uso dos componentes no storybook
    - theme: Algumas funções úteis para aplicar estilos

## Bibliotecas:
    - storybook: Testar e apresentar componentes
    - styled-component: Estilização de componentes React
    - nice-modal-react: controlador de modais simplificado
    - React: framework central
    - eslint: Organização do código
    Outros componentes são obrigatórios para os 3 primeiros funcionarem

## Detalhes técnicos:

### Storybook
    Uso da biblioteca Storybook para visualização separada e simplicidade em aplicar, validar e testar componentes

### Modais
    Uso da biblioteca nice-modal-react para simplificação de uso de Modais na aplicação

### Constantes de estilização
    Uso de constates de estilização para maior clareza