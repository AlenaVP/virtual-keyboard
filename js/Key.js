import AppElement from './AppElement.js';

export default class Key extends AppElement {
  constructor(keyObj) {
    super(`<div class="key ${keyObj.keyName}">
  <span class="rus hidden">
    <span class="caseDown hidden">${keyObj.ru.down}</span>
    <span class="caseUp hidden">${keyObj.ru.up}</span>
    <span class="caps hidden">${keyObj.ru.caps || keyObj.ru.up}</span>
    <span class="shiftCaps hidden">${keyObj.ru.shiftCaps || keyObj.ru.down}</span>
  </span>
  <span class="eng">
    <span class="caseDown">${keyObj.en.down}</span>
    <span class="caseUp hidden">${keyObj.en.up}</span>
    <span class="caps hidden">${keyObj.en.caps || keyObj.en.up}</span>
    <span class="shiftCaps hidden">${keyObj.en.shiftCaps || keyObj.en.down}</span>
  </span>
</div>`);
  }
}
