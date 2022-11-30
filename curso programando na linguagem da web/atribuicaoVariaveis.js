console.log("Trabalhando com atribuição de variáveis");
const idade = 36;
let nome = "Vinicius";//outra forma de declarar, forma mais simples e variavel pode mudar
const sobrenome = "Rodrigues";

console.log(nome,sobrenome,idade);
console.log(nome + " " + sobrenome + " " + idade);
console.log(`meu nome é ${nome}`);
console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + sobrenome;
console.log(nome);

let idade2;//declaração de variável
idade2 = 26;//atribuindo valor
idade2 = idade2 + 1;
console.log(idade2);