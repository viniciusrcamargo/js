console.log(`trabalhando com loops`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);


const idadeComprador = 18;
const estaAcompanhada = true; //booleano
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existente = " + listaDeDestinos[contador]);
        destinoExiste = true;                                                              
        break;
    }else{
        console.log("Destino não existe");
    }
    contador++;
}

console.log("Destino existe = ", destino);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro");
}
