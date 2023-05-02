import AppContainer from './AppContainer.js';
import Utils from './Utils.js';
import { actions } from './keyData.js';

const body = document.querySelector('body');

const appContainer = new AppContainer();

body.prepend(appContainer.container);

function toggleLang() {
  return true;
}

function getVisibleKeyChilds() {
  const visibleKeyChilds = [];
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    const keyChildren = [...key.children];
    keyChildren.forEach((child) => {
      if (child.tagName === 'SPAN' && !child.classList.contains('hidden')) {
        visibleKeyChilds.push(child);
      }
    });
  });
  return visibleKeyChilds;
}

function useCaps() {
  const visibleKeyChilds = getVisibleKeyChilds();
  visibleKeyChilds.forEach((child) => {
    const spans = [...child.children];
    spans.forEach((span) => {
      if (span.tagName === 'SPAN') {
        if (span.classList.contains('caps')) {
          span.classList.remove('hidden');
        } else {
          span.classList.add('hidden');
        }
      }
    });
  });
}

function useLowerCase() {
  const visibleKeyChilds = getVisibleKeyChilds();
  visibleKeyChilds.forEach((child) => {
    const spans = [...child.children];
    spans.forEach((span) => {
      if (span.tagName === 'SPAN') {
        if (span.classList.contains('caseDown')) {
          span.classList.remove('hidden');
        } else {
          span.classList.add('hidden');
        }
      }
    });
  });
}

function toggleCapsLock(key) {
  key.classList.toggle('active');
  if (key.classList.contains('active')) {
    useCaps();
  } else {
    useLowerCase();
  }
}

function isCtrlLeftActive() {
  const keys = [...document.querySelectorAll('.key')];
  const ctrlLeft = keys.filter((key) => key.classList.contains('ControlLeft'));
  return ctrlLeft[0].classList.contains('active');
}

function renderChars(event) {
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
    toggleCapsLock(key);
  } else {
    key.classList.add('active');
    if (key.classList.contains('AltLeft')) {
      if (isCtrlLeftActive()) {
        toggleLang();
      }
    }
    const { textarea } = appContainer;
    if (key.classList.contains('Backspace')) {
      textarea.textContent = Utils.prototype.removeLastChar(textarea);
    }
    if (key.classList.contains('Tab')) {
      event.preventDefault();
      textarea.textContent = Utils.prototype.addTab(textarea);
    }
    if (key.classList.contains('Enter')) {
      event.preventDefault();
      textarea.textContent = Utils.prototype.addEnter(textarea);
    }

    const isActions = actions.controls.some((c) => key.classList.contains(c));
    const isArrows = actions.arrows.some((c) => key.classList.contains(c));
    if (isArrows) {
      textarea.textContent = Utils.prototype.addArrow(textarea, key);
    }
    textarea.textContent = Utils.prototype.addText(isActions, isArrows, textarea, textContent);
  }
}

function deaktivateKey() {
  const keys = [...document.querySelectorAll('.key')];
  keys.filter((k) => k.classList.contains('active') && !k.classList.contains('CapsLock')).forEach((k) => k.classList.remove('active'));
}

appContainer.keyboard.addEventListener('mousedown', renderChars);

appContainer.keyboard.addEventListener('mouseup', deaktivateKey);

document.addEventListener('keydown', renderChars);

document.addEventListener('keyup', deaktivateKey);
