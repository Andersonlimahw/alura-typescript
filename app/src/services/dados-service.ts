import { httpClient } from '../utils/requests/httpClient.js';
import { BASE_URL } from '../utils/requests/api-config.js';
import { Negociacao } from '../models/negociacao.js';

export async function GetData() : Promise<Negociacao[]> {
    return await httpClient({
        url: `${BASE_URL}/dados`, 
        options: {
            method: 'GET'
        }
    }).then((data : any[]) => data.map(dados => {
        return new Negociacao(
            new Date(),
            dados.vezes, 
            dados.montante
        )
    }));
}