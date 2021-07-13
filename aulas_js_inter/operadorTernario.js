// Forma mais simples de escrever estruturas de repetição

//if (idade >= 18){
  //  return 'Maior de Idade'
//} else{
  //  return 'Menor de Idade'
//}

//idade >= 18 ? 'Maior de Idade' : 'Menor de Idade'

function calculaIdade(idade){
    return idade >= 18 ? 'Maior de Idade' : 'Menor de Idade';
}
console.log(calculaIdade(19));