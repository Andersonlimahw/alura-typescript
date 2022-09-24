import { Negociacoes } from "../models/negociacoes.js";
import { formatDate } from "../utils/masks/date.js";
import { View } from "./view.js";
import { Negociacao } from '../models/negociacao';
import { logarTempoDeExecucao, escape } from "../decorators/index.js";

export class NegociacoesView extends View<Negociacoes> {
  
  @escape
  @logarTempoDeExecucao()
  protected template(model : Negociacoes): string {
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
            return `${this.renderRow(negociacao)}`
          }).join('')}
        </tbody>
      </table>
    `;
  }

  private renderRow = (negociacao : Negociacao) => {
    return `
      <tr>
        <td>
          ${formatDate({ date:  negociacao.data })}
        </td>
        <td>
          ${negociacao.quantidade}
        </td>
        <td>
          ${negociacao.valor}
        </td>
      </tr>`
  }

}