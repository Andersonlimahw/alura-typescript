import { logarTempoDeExecucao } from "../decorators/index.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar? : boolean = false;

    constructor(seletor : string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        }
       
        if(escapar){
            this.escapar = escapar;
        }
       
    }

    protected abstract template(model : T): string;

    @logarTempoDeExecucao()
    update(model : T) : void {
        let template  = this.template(model);
        if(this.escapar) {
            const exp = /<script>[\s\S]*?<script>/;
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }

    delete() : void {
        this.elemento.innerHTML = '';
    }
   
}