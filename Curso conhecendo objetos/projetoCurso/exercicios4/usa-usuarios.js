const usuarios = require('./usuarios');

//converte o objeto usuarios em string
const stringUsuarios = JSON.stringify(usuarios);
console.log(stringUsuarios);
console.log(typeof stringUsuarios);

//converte a string em objeto
const objetoUsuarios = JSON.parse(stringUsuarios);
console.log(objetoUsuarios.produtos[0].nome);
console.log(typeof objetoUsuarios);