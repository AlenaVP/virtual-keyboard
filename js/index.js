import AppContainer from './AppContainer.js';

const body = document.querySelector('body');

const appContainer = new AppContainer();

body.prepend(appContainer.container);
