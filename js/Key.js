import AppElement from './AppElement.js';
import Utils from './Utils.js';

export default class Key extends AppElement {
  constructor(keyObj) {
    super(`<div class="key ${keyObj.keyName}"></div>`);
    let langSpan = Utils.prototype.htmlToElement('<span class="rus hidden"></span>');
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caseDown hidden">${keyObj.ru.down}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caseUp hidden">${keyObj.ru.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caps hidden">${keyObj.ru.caps || keyObj.ru.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="shiftCaps hidden">${keyObj.ru.shiftCaps || keyObj.ru.down}</span>`));
    this.element.append(langSpan);
    langSpan = Utils.prototype.htmlToElement('<span class="eng"></span>');
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caseDown">${keyObj.en.down}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caseUp hidden">${keyObj.en.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caps hidden">${keyObj.en.caps || keyObj.en.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="shiftCaps hidden">${keyObj.en.shiftCaps || keyObj.en.down}</span>`));
    this.element.append(langSpan);
  }
}
