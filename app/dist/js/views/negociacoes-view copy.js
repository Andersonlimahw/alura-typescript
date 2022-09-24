import { formatDate } from "../utils/masks/date.js";
export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
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
        }).join('')}
        </tbody>
      </table>
    `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
