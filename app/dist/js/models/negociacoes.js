export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        console.log('Negociacoes: ', this.negociacoes);
        return this.negociacoes;
    }
}
