import AppElement from './AppElement.js';
import Row from './Row.js';
import Key from './Key.js';

import { rows } from './keyData.js';

export default class Keyboard extends AppElement {
  constructor(lang) {
    super('<div class="keyboard" id="keyboard"></div>');
    rows.forEach((row) => {
      const rowElement = new Row().element;
      row.forEach((r) => rowElement.append(new Key(r, lang).element));
      this.element.append(rowElement);
    });
  }
}
