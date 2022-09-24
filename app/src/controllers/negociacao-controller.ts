import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes_view');
    private messageView = new MensagemView('#mensagem_view');

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoDeExecucao()
    public adiciona(): void {
        
        const negociacao = Negociacao.cria(
            this.inputData.value,
            this.inputData.value, 
            this.inputValor.value
        )
        if(!this.diaUtil(negociacao.data)) {
          this.messageView.update('Apenas negociações em dias úteis, são aceitas.');
          return;
        }
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista();
        this.limparFormulario();
        this.atualizaView();
    }

    
    @logarTempoDeExecucao()
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        setTimeout(() => {
            this.messageView.delete();
        }, 1500)
       
    }

    @logarTempoDeExecucao()
    private atualizaView() : void {
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update('Negociação adicionada com sucesso.');
    }
    
    @logarTempoDeExecucao()
    private diaUtil(data : Date) : boolean {
      return data.getDay() > DiasDaSemana.DOMINGO && 
        data.getDay() < DiasDaSemana.SABADO;
    }
}
