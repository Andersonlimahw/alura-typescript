import { Comparevel as Comparavel } from '../interfaces/comparavel.js';
import { Imprimivel } from '../utils/logs/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
    

    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        console.log('Negociacoes: ', this.negociacoes);
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public comparar(negociacoes :  Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
    }
}
