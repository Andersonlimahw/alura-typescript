var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { inspecionar } from '../decorators/inpecionar.js';
import { domInjector } from '../decorators/dom-injector.js';
import { NegociacoesService } from '../services/negociacoes-service.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoes_view');
        this.messageView = new MensagemView('#mensagem_view');
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.cria(this.inputData.value, this.inputData.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this.messageView.update('Apenas negociações em dias úteis, são aceitas.');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista();
        this.limparFormulario();
        this.atualizaView();
    }
    importarDados() {
        this.negociacoesService.
            obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        setTimeout(() => {
            this.messageView.delete();
        }, 1500);
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update('Negociação adicionada com sucesso.');
    }
    diaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO;
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspecionar()
], NegociacaoController.prototype, "adiciona", null);
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "limparFormulario", null);
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "atualizaView", null);
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "diaUtil", null);
