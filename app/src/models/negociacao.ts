import { Modelo } from "../interfaces/modelo.js";
import { ImprimivelClass } from "../utils/logs/imprimivelClass.js";

export class Negociacao  extends ImprimivelClass implements Modelo<Negociacao> {
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

    public comparar(negocicao: Negociacao) : boolean {
        return this.data.getDate() === negocicao.data.getDate() &&
        this.data.getMonth() === negocicao.data.getMonth() &&
        this.data.getFullYear() === negocicao.data.getFullYear()
    }
}