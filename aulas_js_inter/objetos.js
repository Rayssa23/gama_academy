const pessoa = {
    nome: "Rayssa",
    idade: 18,
    cidade: "Boa Vista"
}

//Notação de ponto

console.log(pessoa.nome) //Rayssa

console.log(pessoa['idade'])//18

// Como desestruturar objetos (Destracturing)

const{nome, idade, cidade} = pessoa
console.log(nome) //Rayssa
console.log(idade) //18
console.log(cidade) //Boa Vista
