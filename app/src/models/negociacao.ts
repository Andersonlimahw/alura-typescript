import { ImprimivelClass } from "../utils/logs/imprimivelClass.js";

export class Negociacao extends ImprimivelClass {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {
        super();
    }

    public get volume(): number {
        return this.quantidade * this.valor;
    }

    public get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto() : string {
        return(
            `Data: ${this._data}
             Quantidade: ${this.quantidade}
             Valor: ${this.valor}
            `);
    }

    public static cria(
        dataString : string, 
        quantidadeString: string, 
        valorString: string
    ): Negociacao 
    {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}