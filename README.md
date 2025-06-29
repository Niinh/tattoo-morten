# Morten Tattoo - Fine Line & Tatuagens Autorais

Este é o repositório oficial do site Morten Tattoo, um portfólio digital desenvolvido para apresentar o trabalho de uma artista especializada em tatuagens Fine Line e criações autorais. O site foi construído com foco em design moderno, performance e responsividade.

## ✨ Visão Geral

O projeto é uma Single Page Application (SPA) que destaca o portfólio da artista, informações de contato e detalhes sobre seu estilo único. A navegação é fluida e intuitiva, com animações sutis que enriquecem a experiência do usuário.

## 🌟 Funcionalidades e Seções

O site é composto por várias seções, cada uma projetada para uma finalidade específica:

-   **Hero Section:** A primeira impressão do site, com uma imagem de impacto, o nome da marca e botões de chamada para ação (CTA) para o portfólio e contato.
-   **Portfólio:** Uma galeria de imagens interativa que exibe os trabalhos da artista. As imagens podem ser filtradas por categoria e abertas em um modal para visualização detalhada.
-   **Sobre:** Uma seção que apresenta a artista, sua filosofia de trabalho e sua paixão pela arte da tatuagem.
-   **Estilos de Tatuagem:** Descreve as especialidades da artista, como Fine Line, Pontilhismo, e Arte Autoral.
-   **Depoimentos:** Exibe feedbacks de clientes satisfeitos para construir confiança e credibilidade.
-   **Contato:** Um formulário de contato funcional e informações diretas como WhatsApp e Instagram.
-   **Navegação Fixa:** Um menu de navegação que fica fixo no topo da página ao rolar, garantindo fácil acesso a todas as seções.
-   **Rodapé:** Contém informações de contato, links de navegação e direitos autorais.

## 🚀 Tecnologias Utilizadas

O site foi construído utilizando um conjunto de tecnologias modernas para garantir a melhor performance e experiência de desenvolvimento:

- **Framework:** [Next.js](https://nextjs.org/) 13+
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)

## 📋 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/morten-tattoo.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd morten-tattoo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com hot-reload:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

### Build de Produção

Para criar uma versão otimizada do site para produção:

```bash
npm run build
```

### Iniciando o Servidor de Produção

Após o build, para iniciar o servidor em modo de produção:

```bash
npm run start
```

## 📂 Estrutura de Pastas

A estrutura do projeto segue as convenções do Next.js App Router:

```
/app
|-- /api
|-- globals.css
|-- layout.tsx
|-- page.tsx
/components
|-- /ui
|-- about-section.tsx
|-- contact-section.tsx
|-- footer.tsx
|-- hero-section.tsx
|-- navigation.tsx
|-- portfolio-section.tsx
/public
  |-- /assets
next.config.js
package.json
tailwind.config.ts
```

- **`/app`**: Contém as rotas, layouts e páginas principais da aplicação.
- **`/components`**: Abriga todos os componentes reutilizáveis do site.
- **`/public`**: Para arquivos estáticos como imagens e fontes.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
