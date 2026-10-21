const design = document.body.dataset.design;
const populated = new URLSearchParams(location.search).get('content') === 'exemplos';
const palette = new URLSearchParams(location.search).get('palette');
document.body.dataset.palette = ['marfim', 'papel', 'nevoa'].includes(palette) ? palette : 'marfim';
const app = document.querySelector('#app');
const titles = { encontro: 'Essencial + Caderno', essencial: 'Essencial', caderno: 'Caderno', oficina: 'Oficina' };
const references = [
  ['Lee Robinson', 'https://leerob.com/', 'Tecnologia explicada com clareza.'],
  ['Gustavo Fior', 'https://www.gustavofior.com/', 'Software, design e espaço para outras ideias.'],
  ['Flavio Copes', 'https://flaviocopes.com/', 'Explicações, diagramas e um link levando a outro.'],
  ['Zooper', 'https://zooper.pages.dev/', 'Um cantinho pessoal para projetos e experimentos.']
];
const garden = `<figure class="garden-art" aria-label="Ilustração de ideias que se ramificam como uma árvore">
  <svg viewBox="0 0 290 270" role="img"><title>Uma ideia cria raízes e encontra outras</title>
    <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <path d="M144 228C147 197 137 171 146 140S161 91 152 47M146 168C124 156 100 142 85 112M147 141C178 129 196 108 206 81M148 111C126 94 115 76 113 55M145 194C166 180 188 165 215 159"/>
      <path d="M113 55C96 50 95 32 97 24C115 26 123 39 113 55ZM153 49C146 30 154 16 166 13C175 32 167 44 153 49ZM206 81C204 59 222 49 234 48C234 66 224 81 206 81ZM85 112C65 109 57 91 59 76C79 78 91 90 85 112ZM123 153C102 158 89 149 83 137C102 130 117 138 123 153ZM184 122C181 102 185 91 194 85C204 103 198 115 184 122ZM215 159C222 140 237 138 250 143C243 162 229 169 215 159Z"/>
      <path d="M144 228L132 246M144 228L156 248M142 234L115 243M147 234L177 243M83 230C119 224 179 224 215 231" opacity=".45"/>
      <circle cx="146" cy="141" r="4" fill="var(--paper)"/><circle cx="144" cy="194" r="4" fill="var(--paper)"/>
      <path d="M30 187h35m-18-18v35M239 207h16m-8-8v16" opacity=".4"/>
    </g>
  </svg>
  <figcaption>Uma ideia puxa outra.</figcaption>
</figure>`;
function nav(route) {
  return `<header class="site-header"><a class="signature" href="#inicio"><span aria-hidden="true">${design === 'oficina' ? 'mb_' : 'mb.'}</span> Mateus Braga</a><nav class="nav" aria-label="Principal">${[['inicio','Início'],['links','Links'],['sobre','Sobre']].map(([key,label]) => `<a href="#${key}" ${route === key ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav></header>`;
}
function linkList(count = 4) {
  return `<ul class="link-list">${references.slice(0, count).map(([name,url,description]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${name}<span class="external" aria-hidden="true">↗</span><span class="sr-only"> (abre em nova aba)</span></a><p>${description}</p></li>`).join('')}</ul>`;
}
function home() {
  const heading = { encontro: 'Olá, eu sou o Mateus.', essencial: 'Olá, eu sou o Mateus.', caderno: 'Ideias que criam raízes.', oficina: 'Aprender. Construir. Anotar.' }[design];
  const lead = { encontro: 'Sou engenheiro de software. Este é meu espaço para pensar sobre sistemas, computação e as coisas que descubro pelo caminho.', essencial: 'Sou engenheiro de software. Este é meu espaço para pensar sobre sistemas, computação e as coisas que descubro pelo caminho.', caderno: 'Sou o Mateus, engenheiro de software. Cultivo aqui reflexões sobre computação, sistemas e o que aprendo construindo coisas.', oficina: 'Sou o Mateus, engenheiro de software. Este é meu caderno aberto sobre sistemas, computação e ideias que merecem uma segunda visita.' }[design];
  return `<div class="home-hero"><section class="intro">${['caderno', 'oficina'].includes(design) ? '<p class="kicker">O jardim digital de Mateus Braga</p>' : ''}<h1>${heading}</h1><p class="lead">${lead}</p><p>Um lugar para conectar ideias e compartilhar o que vou aprendendo. Sem pressa de ter tudo pronto.</p><div class="personal-links"><a href="#sobre">Um pouco sobre mim</a><a href="https://github.com/mateusbrg" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></section>${garden}</div>${design === 'encontro' ? motionStudy.landscape() : ''}
    <div class="workshop-art"><div class="map-nodes"><a href="#texto">Observar</a><span aria-hidden="true">→</span><a href="#texto/experimentar">Experimentar</a><span aria-hidden="true">→</span><a href="#links">Conectar</a></div><div class="map-caption">Um caminho possível para uma ideia.</div></div>
    <div class="home-body"><section class="section"><div class="section-title"><h2>${design === 'oficina' ? 'Caderno aberto' : 'Escritos'}</h2>${populated ? '<span class="meta">Exemplos</span>' : ''}</div>${populated ? `<ul class="post-list"><li><a href="#texto">Escrever para entender</a><span class="meta">Ensaio · 3 min</span></li><li><a href="#texto/experimentar">Uma pergunta de cada vez</a><span class="meta">Nota · 1 min</span></li></ul><p class="demo">Conteúdo fictício para experimentar o layout.</p>` : '<div class="empty-note"><p>As primeiras páginas ainda estão por vir.</p><p>Enquanto isso, deixo alguns lugares que me inspiram.</p><a href="#links">Passear pelos links guardados →</a></div>'}</section><section class="section"><div class="section-title"><h2>Vale a visita</h2><a href="#links">Todos os links</a></div>${linkList(2)}</section></div>`;
}
function article(short = false) {
  const title = short ? 'Uma pergunta de cada vez' : 'Escrever para entender';
  const text = short ? `<p>Uma boa anotação pode começar com uma pergunta pequena. Em vez de tentar explicar um sistema inteiro, escolher uma decisão já oferece um ponto de partida.</p><h2 id="experimento">Um experimento pequeno</h2><p>O que acontece quando uma responsabilidade muda de lugar? Desenhar o fluxo, mudar uma parte e observar o resultado ajuda a enxergar consequências que uma descrição abstrata pode esconder.</p><blockquote>Uma pergunta específica costuma abrir mais caminhos do que uma resposta apressada.</blockquote><p>Depois do experimento, vale voltar à pergunta e registrar o que mudou. É esse movimento que a página <a href="#texto">Escrever para entender</a> explora.</p>` : `<p>Às vezes, uma ideia parece clara até a hora de colocá-la em palavras. O que parecia uma conclusão vira uma pergunta. A explicação revela o pedaço que ainda falta compreender.</p><p>Este jardim pode ser um lugar para isso: guardar observações, fazer conexões e voltar a uma ideia com outros olhos. Um texto não precisa encerrar um assunto para valer a leitura.</p><h2 id="conexoes">Uma ideia puxa outra</h2><p>Um <a href="https://flaviocopes.com/" target="_blank" rel="noopener noreferrer">artigo do Flavio Copes</a> pode levar a uma documentação. A documentação, a um experimento. E o experimento pode terminar em uma anotação de três parágrafos.</p><p>Os links fazem parte do pensamento. Eles mostram de onde uma ideia veio e oferecem caminhos para quem quiser continuar.</p>${design === 'encontro' ? motionStudy.diagram() : '<figure class="diagram"><div class="flow" role="img" aria-label="Uma pergunta leva a um experimento, que leva a uma anotação"><span>Uma pergunta</span><span class="arrow" aria-hidden="true">→</span><span>Um experimento</span><span class="arrow" aria-hidden="true">→</span><span>Uma anotação</span></div><figcaption>O caminho é pequeno o bastante para começar hoje.</figcaption></figure>'}<h2 id="pequeno">Começar pequeno</h2><p>Em software, acompanhar uma transformação simples pode esclarecer mais do que ler muitas abstrações de uma vez. Aqui vai um exemplo mínimo de algo que pode virar uma nota:</p><pre tabindex="0" role="region" aria-label="Exemplo de código TypeScript"><code><span class="comment">// Dê um nome ao que você quer entender.</span>
<span class="keyword">const</span> pergunta = 'O que mudou?';
<span class="keyword">const</span> nota = {
  pergunta,
  observacao: 'Uma ideia ficou mais clara.',
};</code></pre><p>O código não precisa impressionar. Precisa permitir que a pergunta seja examinada. Depois, uma segunda nota pode registrar <a href="#texto/experimentar">o que aconteceu no experimento</a>.</p><blockquote>Escrever também é uma forma de descobrir o que ainda não sabemos explicar.</blockquote><h2 id="voltar">Voltar faz parte</h2><p>Um jardim cresce por revisitas. Novas leituras acrescentam contexto; experiências mudam certezas. A página pode guardar essas mudanças sem fingir que a primeira versão era definitiva.</p><p>A curadoria de <a href="https://www.gustavofior.com/" target="_blank" rel="noopener noreferrer">Gustavo Fior</a> e a clareza de <a href="https://leerob.com/" target="_blank" rel="noopener noreferrer">Lee Robinson</a> são boas referências para pensar a forma desse espaço.</p><p>Por enquanto, basta reservar uma página e começar com uma pergunta.</p>`;
  return `<a class="back" href="#inicio">← Voltar ao jardim</a><p class="demo">LEITURA DEMONSTRATIVA · Texto criado para avaliar esta proposta.</p><header class="article-header"><p class="kicker">${short ? 'Nota' : 'Ensaio'} / Aprendizado</p><h1>${title}</h1><p class="summary">${short ? 'Experimentos pequenos, observações que ficam.' : 'Sobre perguntas, conexões e o valor de uma página ainda em construção.'}</p><p class="meta">Mateus Braga · ${short ? '1 min' : '3 min'} de leitura estimada</p></header><div class="reading-layout"><article class="reading">${text}<section class="related"><h2>Continuar o passeio</h2><a href="${short ? '#texto' : '#texto/experimentar'}">${short ? 'Escrever para entender' : 'Uma pergunta de cada vez'} →</a><br><a href="#links">Links guardados →</a></section></article><aside class="sidenote" aria-label="Nesta página">${short ? '<a href="#texto/experimentar/experimento">Um experimento</a>' : '<a href="#texto/conexoes">Conexões</a><a href="#texto/pequeno">Começar pequeno</a><a href="#texto/voltar">Voltar faz parte</a>'}<p>Algumas ideias precisam de espaço para amadurecer.</p></aside></div>`;
}
function links() {
  return `<p class="kicker">Curadoria pessoal</p><h1>Links guardados.</h1><p class="lead">Lugares da internet que inspiram este jardim. Para ler com calma e voltar depois.</p><section class="section" aria-label="Sites de referência">${linkList()}</section><section class="section"><h2>Sobre fazer boas interfaces</h2><ul class="link-list"><li><a href="https://github.com/emilkowalski/skills" target="_blank" rel="noopener noreferrer">Emil Kowalski ↗</a><p>Detalhes de interação, cuidado e intenção.</p></li><li><a href="https://github.com/leonxlnx/taste-skill" target="_blank" rel="noopener noreferrer">Taste Skill ↗</a><p>Direção de arte e personalidade visual.</p></li></ul></section>`;
}
function about() {
  return `<p class="kicker">A pessoa por aqui</p><h1>Olá, sou o Mateus.</h1><div class="about-text"><p>Sou engenheiro de software, interessado em sistemas, computação e tecnologia.</p><p>Este espaço nasce da vontade de compartilhar aprendizados e reflexões. Um jardim digital que possa crescer aos poucos, conforme novas perguntas aparecem.</p><p>Quero que seja um lugar agradável para ler, explorar e voltar. Inclusive para mim.</p><p>Você pode me encontrar no <a href="https://github.com/mateusbrg" target="_blank" rel="noopener noreferrer">GitHub</a> e no <a href="https://linkedin.com/in/mateusbrg" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p></div><section class="section"><h2>Por onde começar</h2><a href="#links">Conheça os lugares que inspiram este espaço →</a></section>`;
}
let lastPage = '';
function render() {
  const parts = location.hash.slice(1).split('/');
  const route = ['inicio','texto','links','sobre'].includes(parts[0]) ? parts[0] : 'inicio';
  const short = parts[1] === 'experimentar';
  const key = route === 'texto' ? `${route}/${short}` : route;
  const anchor = route === 'texto' ? parts[short ? 2 : 1] : null;
  if (key !== lastPage) {
    const isNavigation = Boolean(lastPage);
    app.innerHTML = `<a class="skip" href="#conteudo">Pular para o conteúdo</a><div class="shell">${nav(route)}<main id="conteudo" tabindex="-1">${route === 'texto' ? article(short) : route === 'links' ? links() : route === 'sobre' ? about() : home()}</main><footer class="site-footer"><span>Mateus Braga · Jardim em crescimento</span><a href="#inicio">Voltar ao início ↑</a></footer></div>`;
    document.title = `${route === 'texto' ? short ? 'Uma pergunta de cada vez' : 'Escrever para entender' : route === 'links' ? 'Links guardados' : route === 'sobre' ? 'Sobre' : 'Mateus Braga'} — ${titles[design]}`;
    if (lastPage) document.querySelector('main').focus({ preventScroll: true });
    if (design === 'encontro') {
      motionStudy.bind();
      motionStudy.navigate(isNavigation);
    }
    lastPage = key;
    window.scrollTo(0, 0);
    document.querySelector('.skip').addEventListener('click', event => {
      event.preventDefault();
      document.querySelector('main').focus();
    });
  }
  if (anchor) document.getElementById(anchor)?.scrollIntoView();
}
window.addEventListener('hashchange', render);
render();
