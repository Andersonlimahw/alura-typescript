import { escape } from "../decorators/escape.js";
import { logarTempoDeExecucao } from "../decorators/index.js";
import { inspecionar } from "../decorators/inpecionar.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
  

    constructor(seletor : string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        }
       
       
       
    }

    protected abstract template(model : T): string;


    @logarTempoDeExecucao(true)
    @inspecionar()
    update(model : T) : void {
        let template  = this.template(model);
        this.elemento.innerHTML = template;
    }

    @inspecionar()
    delete() : void {
        this.elemento.innerHTML = '';
    }
   
}