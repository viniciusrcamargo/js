let notas = [8, 9, 7, 10 , 6, 8.9];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;
console.log(`A média das notas é ${media}.`);