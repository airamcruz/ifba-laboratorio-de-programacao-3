
function scanInt(message) {
	return parseInt(prompt(message))
}

function isNumeroPrimoReduce(acc, cur) {
	if(cur > 1) {  
    for(let i = 2; i < cur; i++) {
      if(cur % i === 0) {
          return acc;
      }
    }
    return acc+=1;
  } else {
  	return acc;
  }
}

function main() {

	let quantidadeElementos

  do {
    quantidadeElementos = scanInt("Digite a quantidade de elementos do array: ")
    
    if(isNaN(quantidadeElementos)) {
    	alert("O valor informado é inválido. Por favor, digite novamente.")
    }
    
  } while(isNaN(quantidadeElementos))

  let arrayNumeros = Array(quantidadeElementos)

  for(let i = 0; i <= quantidadeElementos; i++) {
  	let numero = Math.floor(Math.random() * 10)
    console.log(`arrayNumeros[${i}] = ${numero}`)
    arrayNumeros[i] = numero
  }
  
  let quantidadeNumerosPrimos = arrayNumeros.reduce(isNumeroPrimoReduce, 0);

  console.log('quantidadeNumerosPrimos', quantidadeNumerosPrimos)

}

main();

