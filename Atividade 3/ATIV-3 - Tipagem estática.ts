/** 
  IFBA - INSTITUTO FEDERAL DA BAHIA – CAMPUS CAMAÇARI
          CURSO DE BACHARELADO EM COMPUTAÇÃO

              ATIV-3: Tipagem estática

              LEONARDO AIRAM MUNIZ CRUZ

                  Camaçari – BA
                      2023
*/

enum EnumMesAbreviado {
  Jan = 'Jan',
  Fev = 'Fev',
  Mar = 'Mar',
  Abr = 'Abr',
  Mai = 'Mai',
  Jun = 'Jun',
  Jul = 'Jul',
  Ago = 'Ago',
  Set = 'Set',
  Out = 'Out',
  Nov = 'Nov',
  Dez = 'Dez'
}

function getDias(mes: number | string, ano: number): number {

  if (typeof mes === 'number' && (mes < 1 || mes > 12)) {
    throw new Error('O mês deve ser um número entre 1 e 12!')
  } else if (typeof mes === 'string' && !EnumMesAbreviado[mes]) {
    throw new Error('O mês deve ser as três primeiras letras. Exemplo: Jan, Fev, Mar, Abr, Mai...')
  }

  if (typeof mes !== 'number' && (ano < 1 || ano > 3000)) {
    throw new Error('O ano deve ser um número entre 1 e 3000!');
  }

  const mesNumerico = typeof mes === 'number' ? mes : Object.values(EnumMesAbreviado).indexOf(mes) + 1

  return new Date(ano, mesNumerico, 0).getDate()
}

console.log('Quantidade de dias do mês: ', getDias('Fev', 2024))
