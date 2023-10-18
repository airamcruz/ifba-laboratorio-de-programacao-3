import { Ponto } from "./Ponto";

export class Vetor{

    public readonly i: number; 
    public readonly j: number

    constructor(origem: Ponto, extremidade: Ponto) {
        this.i = extremidade.x - origem.x;
        this. j = extremidade.y - origem.y;
    }

    get norma(): number {
        return Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2))
    }
}