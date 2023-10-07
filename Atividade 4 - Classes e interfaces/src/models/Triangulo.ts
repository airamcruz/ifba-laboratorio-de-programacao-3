import { IFigura2D } from "../interfaces/IFigura2D";
import { MathGAUtil } from "../util/MathGAUtil";
import { Ponto } from "./Ponto";

export class Triangulo implements IFigura2D {

    constructor(private pontoA: Ponto, private pontoB: Ponto, private pontoC:Ponto) {
    }

    area(): number {
        let determiante = MathGAUtil.calcularDeterminante(this.pontoA, this.pontoB, this.pontoC);

        if(determiante === 0) {
            throw new Error("Os pontos fornecidos são colineares e não podem formar um triângulo.");
        }

        return Math.round(Math.abs(determiante) / 2);
    }

}