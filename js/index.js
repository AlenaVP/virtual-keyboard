import AppContainer from './AppContainer.js';
import Utils from './Utils.js';
import { actions } from './keyData.js';

const body = document.querySelector('body');

const appContainer = new AppContainer();

let lang;

body.prepend(appContainer.container);

function getLangKey(key) {
  const keyChildren = [...key.children];
  const langKey = {};
  keyChildren.forEach((child) => {
    if (child.tagName === 'SPAN' && !child.classList.contains('hidden')) {
      langKey.lang = child.className;
      langKey.key = child;
    }
  });
  return langKey;
}

function getKeyCaseName(langKey) {
  const spans = [...langKey.key.children];
  let keyCase = '';
  spans.forEach((s) => {
    const classNames = s.classList;
    if (classNames.length === 1) {
      [keyCase] = classNames;
    }
  });
  return keyCase;
}

function getChildren(elementCollection) {
  const children = [];
  elementCollection.forEach((element) => {
    const keyChildren = [...element.children];
    keyChildren.forEach((child) => {
      children.push(child);
    });
  });
  return children;
}

function getVisibleKeyChildren() {
  const visibleKeyChildren = [];
  const keyChildren = getChildren(document.querySelectorAll('.key'));
  keyChildren.forEach((child) => {
    if (child.tagName === 'SPAN' && !child.classList.contains('hidden')) {
      visibleKeyChildren.push(child);
    }
  });
  return visibleKeyChildren;
}

function getLangSpans(language) {
  const children = document.querySelectorAll('.key');
  return getChildren(children).filter((child) => child.classList.contains(language));
}

function toggleLang(key) {
  const langKey = getLangKey(key);
  lang = langKey.lang;
  const keyCase = getKeyCaseName(langKey);
  const enSpans = getLangSpans('eng');
  const ruSpans = getLangSpans('rus');
  if (lang === 'eng') {
    getChildren(enSpans)
      .filter((gc) => !gc.classList.contains('hidden'))
      .forEach((gc) => gc.classList.add('hidden'));
    enSpans.forEach((es) => es.classList.add('hidden'));
    getChildren(ruSpans)
      .filter((gc) => gc.classList.contains(keyCase))
      .forEach((gc) => gc.classList.remove('hidden'));
    ruSpans.forEach((rs) => rs.classList.remove('hidden'));
  } else if (lang === 'rus') {
    getChildren(ruSpans)
      .filter((gc) => !gc.classList.contains('hidden'))
      .forEach((gc) => gc.classList.add('hidden'));
    ruSpans.forEach((rs) => rs.classList.add('hidden'));
    getChildren(enSpans)
      .filter((gc) => !gc.classList.contains(keyCase))
      .forEach((gc) => gc.classList.remove('hidden'));
    enSpans.forEach((es) => es.classList.remove('hidden'));
  }
  return true;
}

function useCaps() {
  const visibleKeyChildren = getVisibleKeyChildren();
  visibleKeyChildren.forEach((child) => {
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
  const visibleKeyChildren = getVisibleKeyChildren();
  visibleKeyChildren.forEach((child) => {
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
      if (event.ctrlKey) {
        toggleLang(key);
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
