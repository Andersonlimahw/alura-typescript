import { formatDate } from "../utils/masks/date.js";
import { View } from "./view.js";
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
