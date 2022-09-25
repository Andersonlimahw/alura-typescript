import { NegociacoesDoDia } from '../interfaces/index.js';
import { Negociacao } from '../models/negociacao.js';
import { BASE_URL } from '../utils/requests/api-config.js';
import { httpClient } from '../utils/requests/httpClient.js';


export class NegociacoesService {
    public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return await httpClient({
            url: `${BASE_URL}/dados`, 
            options: {
                method: 'GET'
            }
        }).then((data : NegociacoesDoDia[]) => data.map(dados => {
            return new Negociacao(
                new Date(),
                dados.vezes, 
                dados.montante
            );
        }));    
    }
}