const salaJS = [8,9,6.5,10,9,6,8,4]
const salaJava = [7,6,8,9,5,10]
const salaPython = [7,3.5,8,9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, nota) => acum + nota,0)
    return somaDasNotas/notasDaSala.length;
} 

console.log(`A média da sala de JS é ${mediaSala(salaJS)}`)
console.log(`A média da sala de Java é ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é ${mediaSala(salaPython)}`)
