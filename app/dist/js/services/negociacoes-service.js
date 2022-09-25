var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Negociacao } from '../models/negociacao.js';
import { BASE_URL } from '../utils/requests/api-config.js';
import { httpClient } from '../utils/requests/httpClient.js';
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield httpClient({
                url: `${BASE_URL}/dados`,
                options: {
                    method: 'GET'
                }
            }).then((data) => data.map(dados => {
                return new Negociacao(new Date(), dados.vezes, dados.montante);
            }));
        });
    }
}
