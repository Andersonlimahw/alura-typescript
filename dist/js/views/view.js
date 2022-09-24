export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error('A classe filha deve implementar o método template()');
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
