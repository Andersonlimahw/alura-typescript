import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form: event ', event);
    controller.adiciona();
});