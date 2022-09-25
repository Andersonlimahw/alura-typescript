var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpClient } from '../utils/requests/httpClient.js';
import { BASE_URL } from '../utils/requests/api-config.js';
export default class BaseService {
    constructor() {
        this.baseUrl = BASE_URL;
    }
    GetAsync({ endpoint, params, options }) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestUrl = `${this.baseUrl}/${endpoint}?${params}`;
            return httpClient({
                url: requestUrl,
                options: Object.assign({ method: 'GET' }, options)
            })
                .then((response) => response)
                .catch((ex) => {
                throw new Error(ex);
            });
        });
    }
    PostAsync({ endpoint, requestBody, options, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestUrl = `${this.baseUrl}/${endpoint}`;
            return httpClient({
                url: requestUrl,
                options: Object.assign({ method: 'POST', body: JSON.stringify(requestBody), headers: Object.assign({ 'Content-Type': 'application/json' }, options.headers) }, options)
            })
                .then((response) => response)
                .catch((ex) => {
                throw new Error(ex);
            });
            ;
        });
    }
    PutAsync({ endpoint, requestBody, options, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestUrl = `${this.baseUrl}/${endpoint}`;
            return httpClient({
                url: requestUrl,
                options: Object.assign({ method: 'PUT', body: JSON.stringify(requestBody), headers: Object.assign({ 'Content-Type': 'application/json' }, options.headers) }, options)
            })
                .then((response) => response)
                .catch((ex) => {
                throw new Error(ex);
            });
            ;
        });
    }
}
