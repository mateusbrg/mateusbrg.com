// Original vector studies: a personal landscape and a sketch-style diagram.
const motionStudy = (() => {
  let scene = 'sunset';
  let pointerNavigation = false;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const descriptions = [
    'Pergunta: por que uma requisição ficou lenta? Escolher uma pergunta específica dá um limite ao experimento.',
    'Experimento: medir uma etapa por vez. Observar o que muda ajuda a separar uma hipótese de uma conclusão.',
    'Anotação: registrar o resultado e o que ainda falta entender. A próxima pergunta pode começar aqui.'
  ];
  const landscape = () => `<figure class="horizon-study" data-scene="${scene}">
    <svg viewBox="0 0 640 164" class="horizon" role="img" aria-labelledby="horizon-title">
      <title id="horizon-title">${scene === 'sunset' ? 'Pôr do sol' : 'Lua cheia'} sobre o mar, com reflexo na água e uma encosta com árvores</title>
      <defs><pattern id="pencil-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-22)"><path d="M0 0V7" stroke="currentColor" stroke-width=".7" opacity=".15"/></pattern></defs>
      <g class="sun-layer" aria-hidden="true">
        <ellipse cx="424" cy="66" rx="61" ry="35" fill="#ead6b7" opacity=".24"/>
        <path d="M399 85C389 66 397 45 416 42C438 36 453 53 450 72L447 86" fill="#dfb384" fill-opacity=".55" stroke="#9a7352" stroke-width="1.2"/>
        <path d="M400 79C392 65 402 44 419 43C439 39 451 55 448 73" fill="none" stroke="#9a7352" stroke-width=".65" opacity=".45"/>
        <path d="M405 94L440 94M396 103L449 102M409 112L436 112M398 122L449 122M414 133L434 132" fill="none" stroke="#af805a" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>
      </g>
      <g class="moon-layer" aria-hidden="true">
        <circle cx="426" cy="43" r="28" fill="#e7e8db" stroke="#788681" stroke-width="1.2"/>
        <path d="M426 16C443 15 456 28 454 44C454 61 438 72 424 70" fill="none" stroke="#788681" stroke-width=".6" opacity=".5"/>
        <g fill="#b6c4bb" opacity=".42"><circle cx="415" cy="33" r="6"/><circle cx="436" cy="50" r="4"/><circle cx="419" cy="55" r="3"/></g>
        <path d="M406 93L444 93M400 102L451 102M411 113L438 112M402 122L448 122M416 132L437 132" stroke="#718d8a" stroke-width="1.8" stroke-linecap="round" opacity=".65"/>
        <g stroke="#788681" stroke-width="1" stroke-linecap="round"><path d="M352 33h5m-2.5-2.5v5M509 51h5m-2.5-2.5v5M553 23h4m-2-2v4"/></g>
      </g>
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path d="M34 111C81 109 104 86 138 88C170 87 190 101 224 103C295 86 357 87 611 87" stroke-width="1.25"/>
        <path d="M225 106C322 91 407 91 608 90" stroke-width=".65" opacity=".42"/>
        <path d="M37 113C82 108 103 88 138 91C176 93 191 106 225 106L228 150H37Z" fill="url(#pencil-hatch)" stroke="none"/>
        <path d="M69 109L69 76M56 94L69 75L80 94M58 100L69 84L82 101M96 99L96 59M82 81L96 58L110 83M80 92L96 71L112 92M123 89L123 69M115 80L123 68L132 81" stroke-width="1.15"/>
        <path d="M274 111q20-3 43 0M498 109q24-4 50-1M330 133q20-3 35-1M555 133q13-3 29 0M244 145q26-5 45-1M465 147q29-5 56-1" stroke-width=".95" opacity=".54"/>
      </g>
    </svg>
    <figcaption><span>Um intervalo para olhar o horizonte.</span><span class="scene-controls" role="group" aria-label="Luz da paisagem"><button type="button" data-scene-choice="sunset" aria-pressed="${scene === 'sunset'}">Pôr do sol</button><button type="button" data-scene-choice="moon" aria-pressed="${scene === 'moon'}">Luar</button></span></figcaption>
  </figure>`;
  const outline = `<svg viewBox="0 0 180 98" preserveAspectRatio="none" aria-hidden="true"><path class="sketch-fill" d="M9 8Q89 3 171 9L173 88Q85 94 8 89Z"/><path d="M9 8Q89 3 171 9L173 88Q85 94 8 89Z"/><path class="second-stroke" d="M12 5Q91 8 174 7L170 91Q83 88 5 92L8 11"/></svg>`;
  const arrow = `<svg class="sketch-arrow" viewBox="0 0 38 28" aria-hidden="true"><path d="M3 15Q16 10 32 14M24 5L33 14L24 22"/></svg>`;
  const diagram = () => `<figure class="sketch-diagram" aria-labelledby="sketch-caption">
    <ol class="sketch-steps">${['Perguntar', 'Experimentar', 'Anotar'].map((label, index) => `<li><button type="button" class="sketch-node" data-step="${index}" aria-pressed="${index === 0}" aria-controls="step-description">${outline}<span class="step-number">0${index + 1}</span><span>${label}</span></button>${index < 2 ? arrow : ''}</li>`).join('')}</ol>
    <figcaption id="sketch-caption">Uma pergunta vira experimento. O experimento vira uma nota.<br>Selecione uma etapa para explorar.</figcaption>
    <p id="step-description" class="step-description" aria-live="polite" aria-atomic="true">${descriptions[0]}</p>
  </figure>`;
  const fade = (element, duration = 160) => {
    element.getAnimations().forEach(animation => animation.cancel());
    const tokens = getComputedStyle(document.body);
    element.animate([{ opacity: .65 }, { opacity: 1 }], {
      duration: reduced.matches ? 100 : duration,
      easing: tokens.getPropertyValue('--ease-out').trim()
    });
  };
  // Keyboard actions stay immediate; fine-pointer hover never leaks to touch.
  document.addEventListener('keydown', () => {
    document.body.dataset.input = 'keyboard';
    pointerNavigation = false;
    document.getAnimations().forEach(animation => animation.cancel());
  }, true);
  document.addEventListener('pointerdown', () => { document.body.dataset.input = 'pointer'; }, true);
  document.addEventListener('pointermove', event => {
    if (event.pointerType === 'mouse') document.body.dataset.input = 'pointer';
  }, { passive: true });
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) pointerNavigation = link.hash !== location.hash && event.detail > 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey;
  }, true);
  reduced.addEventListener('change', () => document.getAnimations().forEach(animation => animation.cancel()));
  function bind() {
    document.querySelectorAll('[data-scene-choice]').forEach(button => button.addEventListener('click', () => {
      scene = button.dataset.sceneChoice;
      const figure = document.querySelector('.horizon-study');
      figure.dataset.scene = scene;
      figure.querySelector('title').textContent = `${scene === 'sunset' ? 'Pôr do sol' : 'Lua cheia'} sobre o mar, com reflexo na água e uma encosta com árvores`;
      figure.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.sceneChoice === scene)));
    }));
    document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', event => {
      if (button.getAttribute('aria-pressed') === 'true') return;
      document.querySelectorAll('[data-step]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      const description = document.querySelector('#step-description');
      description.textContent = descriptions[Number(button.dataset.step)];
      if (event.detail > 0) fade(description);
    }));
  }
  function navigate(isNavigation) {
    if (isNavigation && pointerNavigation) fade(document.querySelector('main'), 160);
    pointerNavigation = false;
  }
  return { landscape, diagram, bind, navigate };
})();
