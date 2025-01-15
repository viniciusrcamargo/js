const estudante = {
    nome: 'Vinicius Rodrigues Camargo',
    idade: 39,
    cpf: 12312312311,
    turma: 'Dart'
}

//console.log(estudante.nome);
function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'idade'));