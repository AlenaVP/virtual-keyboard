import AppElement from './AppElement.js';

export default class Paragraph extends AppElement {
  constructor(className, text) {
    super(`<p class="${className}">${text}</p>`);
  }
}
