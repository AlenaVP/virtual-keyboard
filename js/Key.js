import AppElement from './AppElement.js';
import Utils from './Utils.js';

export default class Key extends AppElement {
  constructor(keyObj, lang) {
    super(`<div class="key ${keyObj.keyName}"></div>`);
    let langHidden = lang === 'eng' ? 'rus hidden' : 'rus';
    let caseHidden = lang === 'eng' ? 'caseDown hidden' : 'caseDown';
    let langSpan = Utils.prototype.htmlToElement(`<span class="${langHidden}"></span>`);
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="${caseHidden}">${keyObj.ru.down}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caseUp hidden">${keyObj.ru.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caps hidden">${keyObj.ru.caps || keyObj.ru.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="shiftCaps hidden">${keyObj.ru.shiftCaps || keyObj.ru.down}</span>`));
    this.element.append(langSpan);

    langHidden = lang === 'rus' ? 'eng hidden' : 'eng';
    caseHidden = lang === 'rus' ? 'caseDown hidden' : 'caseDown';
    langSpan = Utils.prototype.htmlToElement(`<span class="${langHidden}"></span>`);
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="${caseHidden}">${keyObj.en.down}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caseUp hidden">${keyObj.en.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="caps hidden">${keyObj.en.caps || keyObj.en.up}</span>`));
    langSpan.appendChild(Utils.prototype.htmlToElement(`<span class="shiftCaps hidden">${keyObj.en.shiftCaps || keyObj.en.down}</span>`));
    this.element.append(langSpan);
  }
}
