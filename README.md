# RTJ — Caldeiraria e Usinagem

Site institucional conceitual para uma empresa industrial, com foco em caldeiraria, usinagem de precisão e projetos especiais.

[Ver projeto em produção](https://rtj-three.vercel.app)

## Objetivo

Apresentar capacidade técnica e serviços industriais em uma página direta, com hierarquia clara, portfólio visual e chamada para orçamento.

## Funcionalidades

- Hero institucional
- Seções de empresa, soluções e projetos
- Galeria de aplicações
- Formulário de contato no frontend
- CTA para WhatsApp
- Navegação responsiva
- Otimização de imagens com Next.js

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Arquitetura

A página é organizada com App Router e componentes separados para cabeçalho, formulário e elementos compartilhados. O Next.js Image é utilizado nas áreas de portfólio para controlar carregamento e responsividade.

## Decisões e desafios

A composição foi construída para equilibrar linguagem industrial e leitura comercial. Serviços com níveis diferentes de complexidade são apresentados em uma hierarquia única, evitando excesso de texto técnico na primeira navegação.

## Limites do projeto

Este é um projeto conceitual de frontend. Os dados de contato presentes no código são demonstrativos e precisam ser substituídos antes de qualquer uso comercial. O formulário não está conectado a um serviço de envio.

## Executar localmente

```bash
git clone https://github.com/mateusdomingues/rtj.git
cd rtj
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```
