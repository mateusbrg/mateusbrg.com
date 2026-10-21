# Escrever neste blog

A versão escolhida é Essencial + Caderno, na paleta marfim leve. O site começa sem artigos publicados. O antigo `hello-world.mdx` está preservado como rascunho.

## Criar um texto

Crie um arquivo em `src/content/blog/`, por exemplo `minha-primeira-nota.mdx`:

```mdx
---
title: "Minha primeira nota"
description: "Uma frase sobre o que este texto explora."
date: 2026-10-21
draft: true
---

Seu texto começa aqui.

## Uma ideia por vez

Você pode usar parágrafos, listas, links, citações e blocos de código.
```

Enquanto `draft` for `true`, o texto não aparece na home, no arquivo, no sitemap ou em uma página pública. Para publicar, mude para `draft: false` e faça o build/deploy habitual. O nome do arquivo vira a URL: `/blog/minha-primeira-nota`.

A home mostra os cinco textos mais recentes. O arquivo em `/blog` lista todos. A data é obrigatória e é exibida sem conversão de fuso horário. `draft` omitido equivale a `false`, portanto mantenha `draft: true` durante a escrita. Uma data futura não agenda a publicação.

## Imagens e diagramas

A capa é opcional. Para incluir uma, salve em `src/content/blog/images/` e acrescente `image: ./images/nome-da-imagem.png` ao frontmatter. A capa é decorativa; imagens com informação devem estar no corpo com uma descrição alternativa.

Diagramas do Excalidraw podem ser exportados em SVG e incluídos no corpo do texto com uma descrição ou explicação equivalente. Use cores suaves da paleta e mantenha os rótulos legíveis no celular. Os estudos de ilustração e diagrama continuam em `docs/redesign/`; não são artigos publicados.

## Estrutura visual

- Cores e tipografia: `src/styles/global.css`.
- Ilustração do horizonte: `src/components/Horizon.astro`, com pôr do sol como estado inicial.
- GitHub e LinkedIn: `src/components/SocialLinks.astro`, usados na home e em Sobre.
- Formatação dos artigos: classe `.prose` e `src/layouts/BlogPost.astro`.

Não há seção ou rota de links recomendados. As microinterações respondem à interação, sem animação contínua; teclado e preferência por movimento reduzido recebem mudanças imediatas.

## Conferir antes de publicar

Rode `pnpm astro check` e `pnpm build`. Use `pnpm dev` durante a escrita e `pnpm preview` para revisar o resultado de produção, incluindo o celular.
