const salarios = [3244, 2280, 3500, 7900, 12000];

let somaSalarios = 0;

for(salario of salarios){
    somaSalarios += salario;
}

console.log(`A média dos salários é ${somaSalarios/salarios.length}`)
