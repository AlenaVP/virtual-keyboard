export default class Utils {
  htmlToElement(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  addText(isActions, isArrows, element, text) {
    let updatedText = element.textContent;
    if (!(isActions || isArrows)) {
      updatedText += text;
    }
    return updatedText;
  }

  removeLastChar(element) {
    let text = element.textContent;
    text = text.slice(0, text.length - 1);
    return text;
  }

  addTab(element) {
    let text = element.textContent;
    text += '\t';
    return text;
  }

  addEnter(element) {
    let text = element.textContent;
    text += '\n';
    return text;
  }

  addArrow(element, key) {
    let text = element.textContent;
    if (key.classList.contains('ArrowUp')) {
      text += '▲';
    } else if (key.classList.contains('ArrowRight')) {
      text += '►';
    } else if (key.classList.contains('ArrowDown')) {
      text += '▼';
    } else if (key.classList.contains('ArrowLeft')) {
      text += '◄';
    }
    return text;
  }
}
