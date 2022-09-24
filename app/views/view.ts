export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar? : boolean = false;

    constructor(seletor : string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
        if(escapar){
            this.escapar = escapar;
        }
       
    }

    protected abstract template(model : T): string;

    update(model : T) : void {
        let template  = this.template(model);
        if(this.escapar) {
            const exp = /<script>[\s\S]*?<script>/;
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }

    delete() : void {
        this.elemento.innerHTML = null;
    }
   
}