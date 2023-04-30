import Label from './Label.js';
import Textarea from './Textarea.js';

import Keyboard from './Keyboard.js';

import Paragraph from './Paragraph.js';

const body = document.querySelector('body');

body.append(new Label().element);
body.append(new Textarea().element);
body.append(new Keyboard().element);
body.append(new Paragraph('description', 'Клавиатура создана в операционной системе Windows').element);
body.append(new Paragraph('language', 'Для переключения языка комбинация: левыe ctrl + alt').element);
