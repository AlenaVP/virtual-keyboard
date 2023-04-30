import AppElement from './AppElement.js';

export default class Textarea extends AppElement {
  constructor() {
    super('<textarea class="textarea" rows="5" cols="50"></textarea>');
  }
}
