import Utils from './Utils.js';

export default class AppElement {
  constructor(htmlString) {
    this.element = Utils.prototype.htmlToElement(htmlString);
  }
}
