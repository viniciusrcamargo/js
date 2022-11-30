console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
console.log("Destinos possíveis");
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = true; //booleano


if (idadeComprador >= 18) {
  console.log("Comprador maior de idade!");
  listaDeDestinos.splice(1, 1); //remover item
} else {
  if (estaAcompanhada) {
    console.log("O comprador está acompanhado!");
    listaDeDestinos.splice(1, 1); //remover item
  } else {
    console.log("Não é maior de idade, não posso vender");
  }
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);//marior que
// console.log(idadeComprador < 18);//menor que
// console.log(idadeComprador >= 18);//maior igual que
// console.log(idadeComprador <= 18);//menor igual que
// console.log(idadeComprador == 18);//igual
