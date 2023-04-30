import Keyboard from './Keyboard.js';
import Label from './Label.js';
import Paragraph from './Paragraph.js';
import Textarea from './Textarea.js';
import Utils from './Utils.js';

class AppContainer {
  constructor() {
    const container = Utils.prototype.htmlToElement('<div class="container"></div>');

    container.append(new Label().element);
    const textarea = new Textarea().element;
    container.append(textarea);
    const keyboard = new Keyboard().element;
    container.append(keyboard);
    container.append(new Paragraph('description', 'Клавиатура создана в операционной системе Windows').element);
    container.append(new Paragraph('language', 'Для переключения языка комбинация: левыe ctrl + alt').element);

    this.container = container;
    this.textarea = textarea;
    this.keyboard = keyboard;
  }
}

export default AppContainer;
