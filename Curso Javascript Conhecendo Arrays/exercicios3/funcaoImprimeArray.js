const notas = [10,5,6,7,8,9];

function imprimeArray(arr){
    for(let i = 0; i < notas.length; i++){
        console.log(`o indice ${i} tem a nota ${notas[i]}`)
    }
}

imprimeArray(notas);