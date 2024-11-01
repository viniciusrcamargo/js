const notas = [10, 6, 9];

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

for(let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}
console.log(media);