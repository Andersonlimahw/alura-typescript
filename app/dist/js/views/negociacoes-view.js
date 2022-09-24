var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { formatDate } from "../utils/masks/date.js";
import { View } from "./view.js";
import { logarTempoDeExecucao } from "../decorators/index.js";
export class NegociacoesView extends View {
    constructor() {
        super(...arguments);
        this.renderRow = (negociacao) => {
            return `
      <tr>
        <td>
          ${formatDate({ date: negociacao.data })}
        </td>
        <td>
          ${negociacao.quantidade}
        </td>
        <td>
          ${negociacao.valor}
        </td>
      </tr>`;
        };
    }
    template(model) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <th>
            Data
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Valor
          </th>
        </thead>
        <tbody>
          ${model.lista().map(negociacao => {
            return `${this.renderRow(negociacao)}`;
        }).join('')}
        </tbody>
      </table>
    `;
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacoesView.prototype, "template", null);
