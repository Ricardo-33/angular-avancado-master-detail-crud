import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

import { Category } from "./pages/categories";

export class InMemoryDatabase implements InMemoryDbService {
    /* InMemoryDbService pricisa de um método createDb para criar um objeto
    in-memory database */
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas de Casa'},
            { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
            { id: 3, name: 'Lazer', description: 'Cinema, parques, surfar, etc'},
            { id: 4, name: 'Salário', description: 'Recebimento de Salário'},
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
        ]
        return { categories }
    }
}
