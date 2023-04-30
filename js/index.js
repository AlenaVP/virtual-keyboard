import Utils from './Utils.js';

const body = document.querySelector('body');

body.append(Utils.prototype.htmlToElement('<p>Hello world!</p>)'));
