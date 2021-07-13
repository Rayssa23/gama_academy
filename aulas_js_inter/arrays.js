const alunasGama = ['Ana', 'Clara', 'Olivia', 'Estela']
// Acessar informações num array
console.log(alunasGama[3])

// Operador spread (...)
const alunasXp = [...alunasGama, 'Felicity']

console.log(alunasXp)

//Métodos de iteração

//for (let i = 0; i < alunasXp.length; i++){
//    console.log(alunasXp[i])
//}
// Map
alunasXp.map(aluna => console.log(aluna))

//Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numeroImpares = numeros.filter(numero => numero%2 !=0)
console.log(numeroImpares)

const numeroPares = numeros.filter(numero => numero%2 == 0)
console.log(numeroPares)

//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual
},15)
console.log(soma)
