//Boas práticas
//Iniciar com: $ ou _; CamelCase;
// Padronização ECMA/ECMAScript6/ES6
// Novas Formas de declarar variáveis
//// Suas diferenças correspondem ao escopo

// Escopo Local e Global
// var é global ou de funções
// let e const são de escopo bloqueado (local)
// var podem ser atualizadas ou atribuidas nesses escopos
// let podem ser atualizadas
// const não podem ser atualizadas ou reatribuidas
// const precisam ser inicializadas (precisam ter um valor)
{
    let age = 18
}
console.log(age)
//hosting(efeito de elevação) a variável (var) é declarada em cima e depos o JS faz uma atribuição
// Let e Var podem ser atualizadas
