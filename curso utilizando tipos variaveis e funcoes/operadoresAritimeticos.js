const nota1 = 10
const nota2 = 6.5
const nota3 = 8
const nota4 = 9.3

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    media += 0.1; //adiciona um décimo á média
}

console.log(`A média é igual a = ${media.toFixed(2)}`) //imprime com duas casas decimais