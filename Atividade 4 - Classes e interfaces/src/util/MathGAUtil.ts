import { Ponto } from "../models/Ponto";
import { Vetor } from "../types/Vetor.type";

export class MathGAUtil {
    static calcularDeterminantePontos(pontoA: Ponto, pontoB: Ponto, pontoC:Ponto): number {

        /**
         * Sarrus
         * xA   yA   1   |   xA   yA
         * xB   yB   1   |   xB   yB
         * xC   yC   1   |   xC   yC
         */

        /**
         * Macete de Sarrus
         * xA   yA
         * xB   yB
         * xC   yC
         * xA   yA
         * 
         * Diagonais
         * Esquerda = (yA * xB + yB * xC + yC * xA)
         * Direita = (xA * yB + xB * yC + xC * yA)
         * 
         * Resultado = Direita - Esquerda
         */

        const diagonalEsquerda = pontoA.y * pontoB.x + pontoB.y * pontoC.x + pontoC.y * pontoA.x;
        const diagonalDireita = pontoA.x * pontoB.y + pontoB.x * pontoC.y + pontoC.x * pontoA.y;

        
        return diagonalDireita - diagonalEsquerda;
    }

    static calcularDeterminante(...pontos : Ponto[]): number {
        
        let diagonalEsquerda = 0, 
            diagonalDireita = 0;

        const quantidadePontos = pontos.length - 1;

        for(let i = 0; i < quantidadePontos; i++) {
            diagonalEsquerda += pontos[i].y * pontos[i + 1].x;
            diagonalDireita += pontos[i].x * pontos[i + 1].y;
        }

        diagonalEsquerda += pontos[quantidadePontos].y * pontos[0].x;
        diagonalDireita += pontos[quantidadePontos].x * pontos[0].y;
        
        return diagonalDireita - diagonalEsquerda;
    }

    static obterVetor(origem: Ponto, extremidade: Ponto): Vetor {
        return [extremidade.x - origem.x, extremidade.y - origem.y]
    }

    static normaVetor(vetor: Vetor) {
        return Math.sqrt(Math.pow(vetor[0], 2) + Math.pow(vetor[1], 2))
    }

    static calcularAnguloVetores(u: Vetor, v: Vetor) {
        const normaU = this.normaVetor(u);

        const normaV = this.normaVetor(v);

        const cosseno =  this.produtoInternoVetores(u,v) / (normaU * normaV);

        return this.anguloCosseno(cosseno);
    }

    static produtoInternoVetores(u: Vetor, v: Vetor): number {
        return u[0] * v[0] + u[1] * v[1];
    }

    private static anguloCosseno(cosseno: number): number {
      let radianos = Math.acos(cosseno);

      let angulo = (radianos * 180) / Math.PI;

      return Math.round(angulo);
    }
}