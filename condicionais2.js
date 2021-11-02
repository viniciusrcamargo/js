console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
console.log("Destinos possíveis");
console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhada = true; //booleano
const temPassagemComprada = true;


if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(2, 1); //remover item
} else {
    console.log("Não é maior de idade, não posso vender");
}
console.log(listaDeDestinos);

console.log("Embarque: \n\n");
if(idadeComprador >=18 && temPassagemComprada == true){
  console.log("Boa viagem!");
}else{
  console.log("Você não pode embarcar!");
}



