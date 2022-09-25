import { Imprimivel } from '../utils/logs/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        console.log('Negociacoes: ', this.negociacoes);
        return this.negociacoes;
    }

    public paraTexto(): string {
        return `${this.negociacoes.map(x => x.paraTexto())}`;
    }
}
