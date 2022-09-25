import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { inspecionar } from '../decorators/inpecionar.js';
import { domInjector } from '../decorators/dom-injector.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
import { imprimir } from '../utils/logs/imprimir.js';


export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes_view');
    private messageView = new MensagemView('#mensagem_view');
    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspecionar()
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
        imprimir(negociacao, this.negociacoes);
    }

    public importarDados(): void {
        this.negociacoesService.
        obterNegociacoesDoDia()
        .then(negociacoesDeHoje => {
            for(let negociacao of negociacoesDeHoje){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });

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
