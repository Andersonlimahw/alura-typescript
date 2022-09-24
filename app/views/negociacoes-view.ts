import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento : HTMLElement;
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model : Negociacoes): string {
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
                ${negociacao.data}
              </td>
              <td>
                ${negociacao.quantidade}
              </td>
              <td>
                ${negociacao.valor}
              </td>
            </tr>`
          }).join('')}
        </tbody>
      </table>
    `;
  }

  update(model : Negociacoes) : void {
    const template  = this.template(model);
    this.elemento.innerHTML = template;
  }
}