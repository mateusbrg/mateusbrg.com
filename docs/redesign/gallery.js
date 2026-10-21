const names = { encontro: 'Essencial + Caderno', essencial: 'Essencial', caderno: 'Caderno', oficina: 'Oficina' };
const rationale = {
  encontro: ['A estrutura compacta do Essencial com as serifas do Caderno. O nome ganha presença, a apresentação continua direta e a cor fica no papel e nos links. As três paletas mantêm a mesma composição para facilitar a comparação.', 'Marfim leve é a sugestão inicial: preserva um pouco do calor do Caderno com menos amarelo. A home agora traz uma paisagem que alterna entre pôr do sol e luar. Na leitura de exemplo, explore as três etapas do diagrama desenhado à mão.'],
  essencial: ['A proximidade do Gustavo Fior com a clareza do Lee Robinson: coluna compacta, apresentação curta, links sublinhados e quase nenhuma decoração. O site já faz sentido sem um arquivo de artigos.', 'Escolha se você quer que a personalidade venha principalmente da escrita. É o caminho mais discreto; uma foto ou uma pequena ilustração pessoal pode entrar depois.'],
  caderno: ['Uma interpretação editorial do jardim: papel quente, verde de tinta, serifas e uma pequena árvore de ideias. A margem acomoda contexto sem disputar atenção com o texto. Minha recomendação inicial para equilibrar leitura e identidade.', 'Escolha se você quer um lugar mais íntimo, com sensação de caderno. A ilustração é vetorial e original deste estudo; pode ganhar um significado pessoal depois.'],
  oficina: ['A exploração por interesses do Zooper encontra a clareza dos links do Flavio. Índice lateral, azul de caneta e um mapa de ideias conectadas. As anotações podem crescer em ritmos diferentes.', 'Escolha se você imagina guardar notas e experiências com frequência. Exige mais curadoria; no celular, o índice vira navegação horizontal e os desenhos se reorganizam.']
};
let design = 'encontro';
let palette = 'marfim';
const paletteDescriptions = { marfim: 'Um pouco de calor, com bem menos amarelo.', papel: 'Quase neutro, com links em tom de grafite quente.', nevoa: 'Um toque verde acinzentado, fresco e discreto.' };
const frame = document.querySelector('#preview');
const page = document.querySelector('#page');
const content = document.querySelector('#content');
function update() {
  const url = `${design}.html?v=4&content=${content.value}&palette=${palette}#${page.value}`;
  frame.src = url;
  frame.title = `Proposta ${names[design]}`;
  document.querySelector('#open').href = url;
  document.querySelector('#why-title').textContent = names[design];
  document.querySelector('#why').textContent = rationale[design][0];
  document.querySelector('#tradeoff').textContent = rationale[design][1];
  document.querySelectorAll('[data-design]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.design === design)));
  document.querySelector('#palettes').hidden = design !== 'encontro';
  document.querySelector('#palette-description').textContent = paletteDescriptions[palette];
  document.querySelectorAll('[data-palette]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.palette === palette)));
}
document.querySelectorAll('[data-design]').forEach(button => button.addEventListener('click', () => { design = button.dataset.design; update(); }));
document.querySelectorAll('[data-palette]').forEach(button => button.addEventListener('click', () => {
  palette = button.dataset.palette;
  // Preserve the exact article/anchor when comparing colors mid-read.
  const url = new URL(frame.contentWindow.location.href);
  url.searchParams.set('palette', palette);
  frame.contentDocument.body.dataset.palette = palette;
  frame.contentWindow.history.replaceState(null, '', url);
  document.querySelector('#open').href = url.href;
  document.querySelector('#palette-description').textContent = paletteDescriptions[palette];
  document.querySelectorAll('[data-palette]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.palette === palette)));
}));
page.addEventListener('change', update);
content.addEventListener('change', update);
document.querySelector('#mobile').addEventListener('click', event => {
  const enabled = document.querySelector('.preview-stage').classList.toggle('mobile');
  event.currentTarget.setAttribute('aria-pressed', String(enabled));
  event.currentTarget.textContent = enabled ? 'Mostrar desktop' : 'Simular celular';
});
frame.addEventListener('load', () => {
  const sync = () => {
    const hash = frame.contentWindow.location.hash.slice(1);
    const route = Array.from(page.options).some(option => option.value === hash) ? hash : hash.split('/')[0];
    if (Array.from(page.options).some(option => option.value === route)) page.value = route;
    document.querySelector('#open').href = frame.contentWindow.location.href;
  };
  frame.contentWindow.addEventListener('hashchange', sync);
  sync();
});
update();
