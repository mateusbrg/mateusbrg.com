> **Decisão final:** Essencial + Caderno, marfim leve, foi aplicado em `src/`. O site começa sem artigos publicados; os links externos são apenas GitHub e LinkedIn, em “Me encontre por aí”. Os protótipos abaixo preservam o histórico da exploração e não fazem parte do site publicado. Orientações de escrita em [conteudo.md](../conteudo.md).

# Estudos para o jardim digital

Estudo de redesign de mateusbrg.com, preparado em 21 de outubro de 2026.

## Abrir e comparar

Na raiz do repositório:

```sh
rtk proxy python3 -m http.server 4322 --bind 127.0.0.1 --directory docs/redesign
```

Acesse [o comparador local](http://127.0.0.1:4322/). Se a porta estiver ocupada, escolha outra porta livre.

- **Página:** início, leitura de exemplo, links guardados ou sobre.
- **Conteúdo:** a home sem artigos ou com duas publicações demonstrativas.
- **Simular celular:** limita a prévia a 390 px. A proposta também responde à largura real do navegador.
- **Abrir proposta:** abre a direção escolhida fora do comparador, preservando a página atual.
- **Essencial + Caderno:** nova mistura, aberta por padrão, com três paletas suaves. Os botões de cor preservam a posição de leitura.
- **Diagrama de exemplo:** abre a seção ilustrada do artigo. Na mistura, as três etapas podem ser selecionadas.

As páginas `essencial.html`, `caderno.html`, `oficina.html` e `encontro.html` também podem ser abertas diretamente. Os protótipos usam JavaScript para navegar; não representam uma decisão de adicionar uma SPA ao blog.

## Direções

| | Essencial | Caderno | Oficina |
| --- | --- | --- | --- |
| Ideia | Uma pessoa e suas palavras | Um caderno que ganha raízes | Um arquivo de ideias em construção |
| Composição | Coluna central compacta | Abertura editorial e margem lateral na leitura | Índice lateral e conteúdo à direita |
| Tipografia | Sans na home, serifada nos artigos | Serifas na composição e na leitura | Sans na leitura, mono em pequenas anotações |
| Cores | Branco suave, grafite e verde | Papel quente e tinta verde | Branco frio e azul de caneta |
| Personalidade | Discreta, próxima, cotidiana | Contemplativa, calorosa, literária | Curiosa, técnica, explorável |
| Melhor encaixe | Escrever e publicar com pouca curadoria | Ensaios e leituras com calma | Notas, experimentos e conexões frequentes |
| Cuidado | Pode ficar impessoal sem boa escrita | Evitar excesso de decoração e nostalgia | Evitar transformar o site em um painel de ferramentas |

**Recomendação inicial: Caderno.** Foi a primeira aposta para combinar leitura tranquila com uma identidade visual perceptível. As referências adicionais de Gui Dávid e João Bonatti refinam essa recomendação: explorar a estrutura contida do Essencial com a tipografia editorial do Caderno e um detalhe autoral. A árvore vetorial continua sendo uma hipótese do estudo, não um símbolo pessoal já validado pelo autor. Veja o refinamento abaixo.

Ainda falta descobrir os interesses, objetos, lugares e referências pessoais do Mateus além da tecnologia. A proposta evita inventar livros lidos, projetos, hobbies, fotografia, emprego ou biografia. A direção escolhida deve ser refinada a partir dessas informações.

## O que vem das referências

Referências consultadas ao vivo, com inspeção visual das seis homepages. Gui Dávid e João Bonatti também foram examinados em 390 px. Elas podem mudar ao longo do tempo.

- [Lee Robinson](https://leerob.com/): apresentação autoral, texto como elemento principal e navegação por notas. A página [How I'm Writing CSS in 2024](https://leerob.com/css) também ajudou a observar referências dentro do texto.
- [Gustavo Fior](https://www.gustavofior.com/): escala contida, espaço em branco e curadoria pessoal. O artigo [Incremental Complexity](https://www.gustavofior.com/blog/post/incremental-complexity) reforçou a intenção de oferecer caminhos sem sobrecarregar a leitura.
- [Zooper](https://zooper.pages.dev/): organização por interesses e sensação de espaço pessoal. A proposta Oficina interpreta esse princípio com navegação escrita, mais explícita do que ícones isolados.
- [Flavio Copes](https://flaviocopes.com/): links como parte da descoberta e explicações com apoio visual. Também foi inspecionada a página [Give your coding agent a state machine](https://flaviocopes.com/agent-state-machines/).
- [Gui Dávid](https://www.guidavid.com/): fundo quase branco, interface monoespaçada, bastante espaço vazio e um retrato em pixel art com cores fortes. A identidade se concentra em um elemento reconhecível. A home apresenta uma experiência de conversa; o texto do próprio site descreve um canvas de 40 × 40 associado às respostas de um modelo. A conversa não foi acionada nesta análise. Para o blog, a referência principal é a presença autoral desse elemento, não a adoção de um chatbot.
- [João Bonatti](https://joaobonatti.com/): fundo quente, nome em serifada com bastante presença e contraste com pequenas linhas monoespaçadas. A inspeção do navegador identificou Fraunces no nome e Space Mono na navegação e nos textos da home. Apresentação breve, listas diretas e espaço vazio compõem uma página pessoal. No celular, as listas passam a uma coluna. O acesso pelo leitor web falhou; a análise foi feita no navegador, que carregou a página normalmente.
- [Emil Kowalski / skills](https://github.com/emilkowalski/skills), especialmente [Design Engineering](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md): cuidado com interações, foco e movimento que tenha uma finalidade.
- [Taste Skill](https://github.com/leonxlnx/taste-skill): decisões de composição com personalidade e revisão no navegador. Usada como referência de princípios, sem instalar a skill nem executar sua seleção aleatória de direção de arte; o briefing já fornecia as referências desejadas.

Não foram copiados layouts completos, artigos, imagens ou identidade dos autores.

## Refinamento com as duas novas referências

Interpretação de design a validar com o Mateus: o conjunto sugere uma preferência por espaços pessoais contidos, com poucos elementos e uma assinatura visual reconhecível. O interesse nas referências não significa aprovação de todos os seus recursos.

| Observação | Aplicação possível no próximo estudo |
| --- | --- |
| João usa o próprio nome como elemento visual principal | Dar mais presença a “Mateus Braga” e reduzir a importância de um slogan de abertura |
| Gui concentra a cor e a expressão em um retrato | Escolher um único detalhe pessoal: foto tratada, desenho, objeto ou pequeno experimento com significado para o autor |
| Ambos mantêm a estrutura visual econômica | Aproximar a home do Essencial, com apresentação curta e listas de links |
| A serifada e o fundo quente do João reforçam a sensação editorial | Manter a direção tipográfica do Caderno e experimentar mais contraste entre nome, navegação e corpo |
| O propósito principal do blog continua sendo leitura | Usar mono em navegação e metadados; preservar corpo de leitura confortável e evitar copiar os tamanhos pequenos da referência |

**Hipótese para a próxima iteração:** estrutura do Essencial + tipografia e calor do Caderno + um elemento autoral ainda a definir. “Jardim digital” pode aparecer na maneira de conectar, revisar e cultivar textos, sem depender de uma ilustração literal de planta.

Na rodada de inclusão dessas referências, apenas a pesquisa foi atualizada. Depois de explorar os três protótipos, Mateus confirmou a mistura de Essencial com Caderno como direção, descrita a seguir.

## Direção escolhida e entrevista

Mateus confirmou a estrutura do Essencial com a tipografia do Caderno e um detalhe pessoal. Gostou do calor do Caderno, mas pediu cores menos intensas. A nova proposta `encontro.html` mantém uma coluna, usa Georgia nos títulos e Noto Serif no corpo, dá destaque ao nome e oferece três paletas:

| Paleta | Fundo | Texto | Links | Intenção |
| --- | --- | --- | --- | --- |
| Marfim leve | `#fcfaf6` | `#343631` | `#556249` | Calor discreto, com menos amarelo |
| Papel neutro | `#f8f7f4` | `#353530` | `#625b4e` | Papel quase neutro e grafite quente |
| Névoa verde | `#f5f8f6` | `#303a35` | `#4e6860` | Fundo fresco e verde acinzentado |

Os tons suaves se concentram no fundo. Texto e links continuam escuros para preservar a legibilidade. Nesta rodada a paleta ainda estava em avaliação; a escolha final foi marfim leve.

Na primeira resposta da entrevista, Mateus citou games, música, rap e hip-hop, sair com amigos, parques, leitura, mar, praia, natação, paisagens e um gosto especial pelo pôr do sol.

Hipóteses de trabalho, ainda não aprovadas: um detalhe de luz/horizonte baseado em uma paisagem significativa; ou música como curadoria editorial. Esses interesses não foram convertidos automaticamente em seções, desenhos ou afirmações públicas na biografia. Ainda falta descobrir uma cena concreta que tenha significado e como Mateus deseja aparecer no site.

Na resposta seguinte, Mateus confirmou o gosto pela lua cheia, pelo pôr do sol visto de pontos altos ou junto ao mar, pela luz refletida na natureza e pelo som das ondas. Pediu explorar microinterações discretas e ilustrações próximas do traço do Excalidraw. A paisagem abaixo é uma proposta baseada nessa resposta; não representa um lugar real específico.

Validação desta iteração: sintaxe JavaScript; home e leitura nas três paletas a 360, 390 e 1280 px, sem excesso de largura (18 combinações); revisão visual no desktop e celular; troca de cor preservando a posição de leitura e o link direto. O axe não encontrou violações no comparador com a home. Na leitura, as três paletas tiveram zero violações e uma verificação manual pendente relativa às setas decorativas do diagrama. O restante da validação abaixo pertence à primeira rodada.

## Ensaio de ilustração e microinterações

Disponível em `encontro.html`, no comparador e no atalho “Diagrama de exemplo”. Implementação isolada em `atelier.css` e `atelier.js`, sem dependências novas.

- **Paisagem pessoal:** SVG original com mar, encosta, árvores e reflexo na água. Os botões “Pôr do sol” e “Luar” alternam entre duas camadas, com lua cheia e pequenas marcas na superfície. A paisagem permanece parada enquanto a pessoa lê.
- **Diagrama:** contornos levemente irregulares e traço duplo, setas desenhadas e rótulos em texto real. As etapas Perguntar → Experimentar → Anotar revelam uma explicação quando selecionadas. No celular, o fluxo vira vertical. A seleção é comunicada por `aria-pressed` e a explicação por uma região viva.
- **Links e navegação:** traço curto no hover da navegação e deslocamento de 2 px na seta dos links externos da lista. Hover de movimento restrito a mouse/ponteiro fino.
- **Botões:** compressão de 3% ao pressionar, em 160 ms, para confirmar o toque. Ativações por teclado são imediatas.
- **Navegação interna:** fade breve do conteúdo, em 160 ms, apenas após clique/toque. O primeiro carregamento e a navegação por teclado não recebem animação de entrada.
- **Preferências:** movimento reduzido remove transformações e mantém apenas fades de 100 ms. A mudança dessa preferência cancela animações em curso.

As trocas de paisagem usam transições CSS de opacidade em 200 ms, que podem ser revertidas durante a execução. Feedback e fades curtos usam a curva `cubic-bezier(0.23, 1, 0.32, 1)` indicada pelo Emil. Os fades programáticos usam WAAPI e cancelam a animação anterior antes de iniciar outra. Não há reprodução automática nem movimento contínuo.

### Repertório aplicado

- [Emil — Design Engineering](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md): frequência, propósito, feedback, teclado e acessibilidade. Skill lida para esta implementação.
- [Emil — Animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md) e [receitas](https://github.com/emilkowalski/skills/blob/main/skills/animate/RECIPES.md): CSS como primeira escolha, transições interrompíveis e receita de pressão de botão. Skills consultadas remotamente, sem instalação global.
- [LearnVue](https://learnvue.co/): inspeção visual do uso de contornos irregulares, hachuras e cores nas ilustrações. O estudo adapta o vocabulário do desenho para uma paleta mais contida.
- [Gustavo Fior](https://www.gustavofior.com/): inspeção de elementos, ícones e transições curtas nos links; referência de escala e cuidado visual.

Os desenhos são SVGs originais, não imagens copiadas nem arquivos produzidos pelo Excalidraw. O traço manual foi feito em vetor para permanecer nítido e permitir interação no blog.

### Verificações deste ensaio

- Sintaxe de `atelier.js`, `site.js` e `gallery.js`.
- Inspeção visual da paisagem e do diagrama em desktop e 390 px, sem rolagem lateral.
- Dez alternâncias rápidas entre pôr do sol e luar terminaram na camada correta, com zero animações pendentes.
- Seleção de etapas por mouse e Enter; teclado confirmado com transições de 0 s e zero animações pendentes.
- Movimento reduzido confirmado: botões sem transformações animadas e camadas da paisagem com fade de 100 ms.
- Axe na home: zero violações e zero verificações incompletas. No diagrama: zero violações e revisão manual de contraste por causa do SVG atrás do texto. Cálculo das cores de texto sobre os fundos normal/selecionado nas três paletas: contraste mínimo de 4,70:1.
- Atalho “Diagrama de exemplo” e comparador verificados em largura de celular. Estas verificações usam navegador automatizado; não houve teste em aparelho físico.

## Experiência de leitura

- Coluna de leitura limitada, fontes locais, bom espaço entre parágrafos e links sublinhados.
- Dois textos demonstrativos conectados entre si, com retorno ao jardim e referências externas reais.
- Diagrama simples que muda de horizontal para vertical no celular, com alternativa textual acessível.
- Bloco de código com rolagem própria para não alargar a página.
- Navegação por teclado, link para pular ao conteúdo e foco visível.
- Conteúdo legível desde o carregamento; as microtransições da mistura respondem a ações, sem movimento automático contínuo.
- Rótulos explícitos para os textos fictícios. A home começa sem artigos por padrão.

As estimativas de leitura são ilustrativas. A biografia é uma proposta de texto baseada no conteúdo atual do repositório.

## Escopo técnico

Todos os arquivos do estudo ficam em `docs/redesign/`, fora das rotas Astro e do build público. As fontes foram copiadas dos pacotes já instalados; as licenças estão em `fonts/`. Nenhuma dependência nova.

Na primeira rodada, o site possuía um `Post zero` e textos provisórios na home, que os protótipos não modificavam. Na implementação final, a home foi substituída e `Post zero` foi preservado como rascunho.

A implementação final aproveita os componentes Astro, os tokens do Tailwind v4 e a coleção MDX existentes. A imagem de capa agora é opcional: o layout não exige uma imagem para todo texto.

Context7 MCP não estava disponível nesta sessão. Os estudos usam apenas HTML/CSS/JavaScript e não introduzem APIs novas de framework.

## Validação

- Sintaxe dos dois arquivos JavaScript verificada com `node --check`.
- Inspeção visual das três homes em desktop e das três leituras em 390 px.
- 24 combinações verificadas no navegador: três direções × início com exemplos/leitura × 360, 390, 768 e 1280 px. Nenhum excesso de largura da página; um único `h1` em cada combinação.
- Controles do comparador verificados: troca de proposta, página e simulação de celular.
- Auditoria automática axe das leituras e do comparador, complementada por revisão visual. Isso não equivale a uma certificação completa de acessibilidade.
- `pnpm --config.verify-deps-before-run=false astro check`: 15 arquivos, zero erros, avisos ou hints.
- `pnpm --config.verify-deps-before-run=false build`: quatro páginas estáticas geradas com sucesso.

O pnpm local tentou reinstalar dependências antes de executar os comandos usuais. A opção acima desativou essa verificação apenas nas invocações, permitindo usar as dependências já instaladas. Nenhuma configuração, manifesto ou lockfile foi alterado. Os checks do Astro validam o blog atual; os protótipos foram validados separadamente no navegador.
