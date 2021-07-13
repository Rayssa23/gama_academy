const filmes = [
    {
        id:1,
        titulo: "Orgulho e Preconceito", 
        descricao: "Elizabeth e Darcy" ,
        duracao: 120

},
{
        id:2,
        titulo: "Sociedade Literária e a Torta de Casca de Batata", 
        descricao: "Livros" ,
        duracao: 140

},
{
        id:3,
        titulo: "Uma noite de Crime", 
        descricao: "Anarquia Total" ,
        duracao: 120

}
]

const [{ id, titulo, descricao, duracao}] = filmes

console.log(titulo)

filmes.map(filme => console.log(filme.descricao))