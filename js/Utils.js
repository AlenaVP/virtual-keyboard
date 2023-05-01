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
}
