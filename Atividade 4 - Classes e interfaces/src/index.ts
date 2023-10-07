import { Ponto } from "./models/Ponto";
import { Retangulo } from "./models/Retangulo";
import { Triangulo } from "./models/Triangulo";

try {
    const triangulo = new Triangulo(new Ponto(0,1), new Ponto(2,-3), new Ponto(-3,-2));

    console.log(`Área do triângulo: ${triangulo.area()}m²`);

} catch (error) {
    console.error((error as Error).message);
}

try {
    const retangulo = new Retangulo(new Ponto(0, 0), new Ponto(3, 0), new Ponto(3, 5), new Ponto(0, 5));
    
    console.log(`Área do retângulo: ${retangulo.area()}m²`);

} catch (error) {
    console.error((error as Error).message);
}