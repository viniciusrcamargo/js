console.log(`trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`);//adicionando item à lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//deleta um elemento do array passando o indice e a quantidade de elementos
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);//mostrando só o elemento referente ao indice passado
listaDeDestinos.pop();//Pop tira o ultimo elemento da lista
console.log(listaDeDestinos);
listaDeDestinos.pop();
console.log(listaDeDestinos);