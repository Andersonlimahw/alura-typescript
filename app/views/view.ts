export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor : string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model : T): string;

    update(model : T) : void {
        const template  = this.template(model);
        this.elemento.innerHTML = template;
    }

    delete() : void {
        this.elemento.innerHTML = null;
    }
   
}