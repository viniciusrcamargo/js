const media = [10,8,9,7,6.5];

let soma = 0;

for(let i = 0; i < media.length; i++) {
    soma += media[i];
}

const mediaFinal = soma/media.length;
console.log(`A média final é ${mediaFinal}`);