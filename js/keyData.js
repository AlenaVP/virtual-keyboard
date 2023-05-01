const rows = [];
const actions = {
  controls: ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft', 'Delete'],
  arrows: ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'],
  keys: rows,
};

rows[0] = [
  {
    keyName: 'Backquote',
    en: {
      caps: '`', down: '`', up: '~', shiftCaps: '~',
    },
    ru: {
      caps: 'Ё', down: 'ё', up: 'Ё', shiftCaps: 'ё',
    },
  },
  {
    keyName: 'Digit1',
    en: {
      caps: '1', down: '1', up: '!', shiftCaps: '!',
    },
    ru: {
      caps: '1', down: '1', up: '!', shiftCaps: '!',
    },
  },
  {
    keyName: 'Digit2',
    en: {
      caps: '2', down: '2', up: '@', shiftCaps: '@',
    },
    ru: {
      caps: '2', down: '2', up: '"', shiftCaps: '"',
    },
  },
  {
    keyName: 'Digit3',
    en: {
      caps: '3', down: '3', up: '#', shiftCaps: '#',
    },
    ru: {
      caps: '3', down: '3', up: '№', shiftCaps: '№',
    },
  },
  {
    keyName: 'Digit4',
    en: {
      caps: '4', down: '4', up: '$', shiftCaps: '$',
    },
    ru: {
      caps: '4', down: '4', up: ';', shiftCaps: ';',
    },
  },
  {
    keyName: 'Digit5',
    en: {
      caps: '5', down: '5', up: '%', shiftCaps: '%',
    },
    ru: {
      caps: '5', down: '5', up: '%', shiftCaps: '%',
    },
  },
  {
    keyName: 'Digit6',
    en: {
      caps: '6', down: '6', up: '^', shiftCaps: '^',
    },
    ru: {
      caps: '6', down: '6', up: ':', shiftCaps: ':',
    },
  },
  {
    keyName: 'Digit7',
    en: {
      caps: '7', down: '7', up: '&', shiftCaps: '&',
    },
    ru: {
      caps: '7', down: '7', up: '?', shiftCaps: '?',
    },
  },
  {
    keyName: 'Digit8',
    en: {
      caps: '8', down: '8', up: '*', shiftCaps: '*',
    },
    ru: {
      caps: '8', down: '8', up: '*', shiftCaps: '*',
    },
  },
  {
    keyName: 'Digit9',
    en: {
      caps: '9', down: '9', up: '(', shiftCaps: '(',
    },
    ru: {
      caps: '9', down: '9', up: '(', shiftCaps: '(',
    },
  },
  {
    keyName: 'Digit0',
    en: {
      caps: '0', down: '0', up: ')', shiftCaps: ')',
    },
    ru: {
      caps: '0', down: '0', up: ')', shiftCaps: ')',
    },
  },
  {
    keyName: 'Minus',
    en: {
      caps: '-', down: '-', up: '_', shiftCaps: '_',
    },
    ru: {
      caps: '-', down: '-', up: '_', shiftCaps: '_',
    },
  },
  {
    keyName: 'Equal',
    en: {
      caps: '=', down: '=', up: '+', shiftCaps: '+',
    },
    ru: {
      caps: '=', down: '=', up: '+', shiftCaps: '+',
    },
  },
  { keyName: 'Backspace', en: { down: 'Backspace', up: 'Backspace' }, ru: { down: 'Backspace', up: 'Backspace' } },
];
rows[1] = [
  { keyName: 'Tab', en: { down: 'Tab', up: 'Tab' }, ru: { down: 'Tab', up: 'Tab' } },
  { keyName: 'KeyQ', en: { down: 'q', up: 'Q' }, ru: { down: 'й', up: 'Й' } },
  { keyName: 'KeyW', en: { down: 'w', up: 'W' }, ru: { down: 'ц', up: 'Ц' } },
  { keyName: 'KeyE', en: { down: 'e', up: 'E' }, ru: { down: 'у', up: 'У' } },
  { keyName: 'KeyR', en: { down: 'r', up: 'R' }, ru: { down: 'к', up: 'К' } },
  { keyName: 'KeyT', en: { down: 't', up: 'T' }, ru: { down: 'е', up: 'Е' } },
  { keyName: 'KeyY', en: { down: 'y', up: 'Y' }, ru: { down: 'н', up: 'Н' } },
  { keyName: 'KeyU', en: { down: 'u', up: 'U' }, ru: { down: 'г', up: 'Г' } },
  { keyName: 'KeyI', en: { down: 'i', up: 'I' }, ru: { down: 'ш', up: 'Ш' } },
  { keyName: 'KeyO', en: { down: 'o', up: 'O' }, ru: { down: 'щ', up: 'Щ' } },
  { keyName: 'KeyP', en: { down: 'p', up: 'P' }, ru: { down: 'з', up: 'З' } },
  {
    keyName: 'BracketLeft',
    en: {
      caps: '[', down: '[', up: '{', shiftCaps: '{',
    },
    ru: {
      caps: 'Х', down: 'х', up: 'Х', shiftCaps: 'х',
    },
  },
  {
    keyName: 'BracketRight',
    en: {
      caps: ']', down: ']', up: '}', shiftCaps: '}',
    },
    ru: {
      caps: 'Ъ', down: 'ъ', up: 'Ъ', shiftCaps: 'ъ',
    },
  },
  {
    keyName: 'Backslash',
    en: {
      caps: '\\', down: '\\', up: '|', shiftCaps: '|',
    },
    ru: {
      caps: '\\', down: '\\', up: '/', shiftCaps: '/',
    },
  },
  { keyName: 'Delete', en: { down: 'Del', up: 'Del' }, ru: { down: 'Del', up: 'Del' } },
];
rows[2] = [
  { keyName: 'CapsLock', en: { down: 'CapsLock', up: 'CapsLock' }, ru: { down: 'CapsLock', up: 'CapsLock' } },
  { keyName: 'KeyA', en: { down: 'a', up: 'A' }, ru: { down: 'ф', up: 'Ф' } },
  { keyName: 'KeyS', en: { down: 's', up: 'S' }, ru: { down: 'ы', up: 'Ы' } },
  { keyName: 'KeyD', en: { down: 'd', up: 'D' }, ru: { down: 'в', up: 'В' } },
  { keyName: 'KeyF', en: { down: 'f', up: 'F' }, ru: { down: 'а', up: 'А' } },
  { keyName: 'KeyG', en: { down: 'g', up: 'G' }, ru: { down: 'п', up: 'П' } },
  { keyName: 'KeyH', en: { down: 'h', up: 'H' }, ru: { down: 'р', up: 'Р' } },
  { keyName: 'KeyJ', en: { down: 'j', up: 'J' }, ru: { down: 'о', up: 'О' } },
  { keyName: 'KeyK', en: { down: 'k', up: 'K' }, ru: { down: 'л', up: 'Л' } },
  { keyName: 'KeyL', en: { down: 'l', up: 'L' }, ru: { down: 'д', up: 'Д' } },
  {
    keyName: 'Semicolon',
    en: {
      caps: ';', down: ';', up: ':', shiftCaps: ':',
    },
    ru: {
      caps: 'Ж', down: 'ж', up: 'Ж', shiftCaps: 'ж',
    },
  },
  {
    keyName: 'Quote',
    en: {
      caps: "'", down: "'", up: '"', shiftCaps: '"',
    },
    ru: {
      caps: 'Э', down: 'э', up: 'Э', shiftCaps: 'э',
    },
  },
  { keyName: 'Enter', en: { down: 'Enter', up: 'Enter' }, ru: { down: 'Enter', up: 'Enter' } },
];
rows[3] = [
  { keyName: 'ShiftLeft', en: { down: 'Shift', up: 'Shift' }, ru: { down: 'Shift', up: 'Shift' } },
  { keyName: 'KeyZ', en: { down: 'z', up: 'Z' }, ru: { down: 'я', up: 'Я' } },
  { keyName: 'KeyX', en: { down: 'x', up: 'X' }, ru: { down: 'ч', up: 'Ч' } },
  { keyName: 'KeyC', en: { down: 'c', up: 'C' }, ru: { down: 'с', up: 'С' } },
  { keyName: 'KeyV', en: { down: 'v', up: 'V' }, ru: { down: 'м', up: 'М' } },
  { keyName: 'KeyB', en: { down: 'b', up: 'B' }, ru: { down: 'и', up: 'И' } },
  { keyName: 'KeyN', en: { down: 'n', up: 'N' }, ru: { down: 'т', up: 'Т' } },
  { keyName: 'KeyM', en: { down: 'm', up: 'M' }, ru: { down: 'ь', up: 'Ь' } },
  {
    keyName: 'Comma',
    en: {
      caps: ',', down: ',', up: '<', shiftCaps: '<',
    },
    ru: {
      caps: 'Б', down: 'б', up: 'Б', shiftCaps: 'б',
    },
  },
  {
    keyName: 'Period',
    en: {
      caps: '.', down: '.', up: '>', shiftCaps: '>',
    },
    ru: {
      caps: 'Ю', down: 'ю', up: 'Ю', shiftCaps: 'ю',
    },
  },
  {
    keyName: 'Slash',
    en: {
      caps: '/', down: '/', up: '?', shiftCaps: '?',
    },
    ru: {
      caps: '.', down: '.', up: ',', shiftCaps: ',',
    },
  },
  { keyName: 'ArrowUp', en: { down: '▲', up: '▲' }, ru: { down: '▲', up: '▲' } },
  { keyName: 'ShiftRight', en: { down: 'Shift', up: 'Shift' }, ru: { down: 'Shift', up: 'Shift' } },
];
rows[4] = [
  { keyName: 'ControlLeft', en: { down: 'Ctrl', up: 'Ctrl' }, ru: { down: 'Ctrl', up: 'Ctrl' } },
  { keyName: 'MetaLeft', en: { down: 'Win', up: 'Win' }, ru: { down: 'Win', up: 'Win' } },
  { keyName: 'AltLeft', en: { down: 'Alt', up: 'Alt' }, ru: { down: 'Alt', up: 'Alt' } },
  { keyName: 'Space', en: { down: ' ', up: ' ' }, ru: { down: ' ', up: ' ' } },
  { keyName: 'AltRight', en: { down: 'Alt', up: 'Alt' }, ru: { down: 'Alt', up: 'Alt' } },
  { keyName: 'ArrowLeft', en: { down: '◄', up: '◄' }, ru: { down: '◄', up: '◄' } },
  { keyName: 'ArrowDown', en: { down: '▼', up: '▼' }, ru: { down: '▼', up: '▼' } },
  { keyName: 'ArrowRight', en: { down: '►', up: '►' }, ru: { down: '►', up: '►' } },
  { keyName: 'ControlRight', en: { down: 'Ctrl', up: 'Ctrl' }, ru: { down: 'Ctrl', up: 'Ctrl' } },
];

export { rows, actions };
