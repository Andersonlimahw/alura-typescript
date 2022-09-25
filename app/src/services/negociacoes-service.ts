import { NegociacoesDoDia } from '../interfaces/index.js';
import { Negociacao } from '../models/negociacao.js';
import BaseService from './base-service.js';


export class NegociacoesService extends BaseService<NegociacoesDoDia[]> {
    public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return await this.GetAsync({
            endpoint: 'dados',
        }).then((data : NegociacoesDoDia[]) => data.map(dados => {
            return new Negociacao(
                new Date(),
                dados.vezes, 
                dados.montante
            );
        }));    
    }
}