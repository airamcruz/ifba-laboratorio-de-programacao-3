import { Ponto } from "../models/Ponto";
import { Vetor } from "../models/Vetor";

export class MathGAUtil {

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
    
    static calcularAnguloVetores(u: Vetor, v: Vetor) {

        const cosseno =  this.produtoInternoVetores(u,v) / (u.norma * v.norma);

        return this.anguloCosseno(cosseno);
    }

    static produtoInternoVetores(u: Vetor, v: Vetor): number {
        return u.i * v.i + u.j * v.j;
    }

    private static anguloCosseno(cosseno: number): number {
      let radianos = Math.acos(cosseno);

      let angulo = (radianos * 180) / Math.PI;

      return Math.round(angulo);
    }
}