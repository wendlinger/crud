import { Estabelecimento } from './estabelecimento.model';

export class Profissional {
    id?: number
    nome: string
    endereco: string
    estabelecimento?: Estabelecimento

    constructor() { }
}