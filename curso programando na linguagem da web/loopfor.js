console.log("Trabalhando com loops - For");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = true; //booleano
let temPassagemComprada = false;
const destino = "Bahia";
let destinoExiste = false;
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

for(let i = 0; i < 3; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro");
}