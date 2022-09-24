export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            const exp = /<script>[\s\S]*?<script>/;
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
    delete() {
        this.elemento.innerHTML = '';
    }
}
