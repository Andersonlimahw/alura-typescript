var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { inspecionar } from '../decorators/inpecionar.js';
import { domInjector } from '../decorators/dom-injector.js';
import { GetData } from '../services/dados-service.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoes_view');
        this.messageView = new MensagemView('#mensagem_view');
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
        return __awaiter(this, void 0, void 0, function* () {
            yield GetData()
                .then(negociacoesDeHoje => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
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
