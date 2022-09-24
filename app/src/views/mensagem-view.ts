import { logarTempoDeExecucao } from "../decorators/index.js";
import { View } from "./view.js";

export class MensagemView extends View<string> {
  
  @logarTempoDeExecucao()
  protected template(model : string): string {
    return `
      <p class="alert alert-info">
        ${model}
      </p>
    `;
  }
}