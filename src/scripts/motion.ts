const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let input = 'keyboard';
let pointerNavigation = false;
let pageAnimation: Animation | undefined;

function setInput(value: string) {
  input = value;
  document.body.dataset.input = value;
}

document.addEventListener('keydown', () => {
  setInput('keyboard');
  pointerNavigation = false;
  pageAnimation?.cancel();
}, true);
document.addEventListener('pointerdown', () => setInput('pointer'), true);
document.addEventListener('pointermove', event => {
  if (event.pointerType === 'mouse') setInput('pointer');
}, { passive: true });
document.addEventListener('click', event => {
  const link = event.target instanceof Element ? event.target.closest('a') : null;
  pointerNavigation = Boolean(link && link.origin === location.origin &&
    link.pathname !== location.pathname && !link.target && !link.hasAttribute('download') &&
    event.detail > 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey);
}, true);
document.addEventListener('astro:after-swap', () => setInput(input));
document.addEventListener('astro:page-load', () => {
  pageAnimation?.cancel();
  if (pointerNavigation && !reducedMotion.matches) {
    pageAnimation = document.querySelector('main')?.animate([{ opacity: .65 }, { opacity: 1 }], {
      duration: 160,
      easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
    });
  }
  pointerNavigation = false;
  setInput(input);
});
reducedMotion.addEventListener('change', () => pageAnimation?.cancel());
