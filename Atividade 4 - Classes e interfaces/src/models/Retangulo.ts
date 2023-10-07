import { IFigura2D } from "../interfaces/IFigura2D";
import { MathGAUtil } from "../util/MathGAUtil";
import { Ponto } from "./Ponto";

export class Retangulo implements IFigura2D {

    constructor(private pontoA: Ponto, private pontoB: Ponto, private pontoC:Ponto, private pontoD:Ponto) {
    }

    area(): number {
        let vetorA = MathGAUtil.obterVetor(this.pontoA, this.pontoB);
        let vetorB = MathGAUtil.obterVetor(this.pontoA, this.pontoD);
        
        let vetorC = MathGAUtil.obterVetor(this.pontoC, this.pontoB);
        let vetorD = MathGAUtil.obterVetor(this.pontoC, this.pontoD);

        if(MathGAUtil.calcularAnguloVetores(vetorA, vetorB) !== 90 
            || MathGAUtil.calcularAnguloVetores(vetorC, vetorD) !== 90
            || (MathGAUtil.normaVetor(vetorA) == MathGAUtil.normaVetor(vetorB))) {

            throw new Error("Os pontos fornecidos não podem formar um retângulo.");
        }

        let determiante = MathGAUtil.calcularDeterminante(this.pontoA, this.pontoB, this.pontoC, this.pontoD);

        return Math.round(Math.abs(determiante) / 2);
    }

}