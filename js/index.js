import AppContainer from './AppContainer.js';
import Utils from './Utils.js';
import { actions } from './keyData.js';

const body = document.querySelector('body');

const appContainer = new AppContainer();

body.prepend(appContainer.container);

const renderChar = function renderChar(event) {
  let key;
  let textContent;
  if (event.type === 'mousedown') {
    const { target } = event;
    if (target.tagName !== 'SPAN') return;
    textContent = target.textContent;
    key = target.closest('.key');
  } else if (event.type === 'keydown') {
    textContent = event.key;
    key = document.querySelector(`.${event.code}`);
  }
  if (key.classList.contains('CapsLock')) {
    key.classList.toggle('active');
  } else {
    key.classList.add('active');
    const isActions = actions.controls.some((c) => key.classList.contains(c));
    const isArrows = actions.arrows.some((c) => key.classList.contains(c));
    const { textarea } = appContainer;
    textarea.textContent = Utils.prototype.addText(isActions, isArrows, textarea, textContent);
  }
};

const deaktivateKey = function deaktivateKey() {
  const keys = [...document.querySelectorAll('.key')];
  keys.filter((k) => k.classList.contains('active') && !k.classList.contains('CapsLock')).forEach((k) => k.classList.remove('active'));
};

appContainer.keyboard.addEventListener('mousedown', renderChar);

appContainer.keyboard.addEventListener('mouseup', deaktivateKey);

document.addEventListener('keydown', renderChar);

document.addEventListener('keyup', deaktivateKey);
