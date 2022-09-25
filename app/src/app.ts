import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log('Form: event ', event);
        controller.adiciona();
    });
} else {
    throw new Error('Não foi possível incializar a aplicação. Form não encontrado');
}

const botaoImportar = document.querySelector('#botao_importar');
if(botaoImportar){
    botaoImportar.addEventListener('click', () => {
        controller.importarDados();
    })
} else {
    throw new Error('Botão importar não foi encontrado com o id botao_importar');
}
