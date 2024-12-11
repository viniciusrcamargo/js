const numeros = [1,15,66,77,88,3,4,90]

let maiorNumero = 0
let menorNumero = 999

for(num of numeros){
    if(num < menorNumero){
        menorNumero = num;
    }

    if(num >= maiorNumero){
        maiorNumero = num;
    }
}

console.log(`O maior número é ${maiorNumero}`);
console.log(`O menor número é ${menorNumero}`);
