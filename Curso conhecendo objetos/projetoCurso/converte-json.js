const estudante = require('./estudante.json');
//converte o objeto estudante em string
const stringEstudante = JSON.stringify(estudante);

// console.log(stringEstudante);
// console.log(typeof stringEstudante);

//converte a string em objeto
const objetoEstudante = JSON.parse(stringEstudante);
console.log(objetoEstudante.nome);