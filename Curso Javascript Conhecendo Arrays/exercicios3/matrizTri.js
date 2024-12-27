let alunosIdadesNotas = [
    [
        ['João','José','Maria','Ana'],
    ],
    [
        [15,17,14,16],
        [8,7,9.5,10]
    ]
    
]

for(let i = 0; i < alunosIdadesNotas.length; i++ ){
    console.log(`O aluno ${alunosIdadesNotas[i]}`)
    for(let j = 0; j < alunosIdadesNotas[i].length; j++){
        console.log(`A idade do aluno ${alunosIdadesNotas[i][j]}`)
        for(let k = 0; k < alunosIdadesNotas[i][j].length; k++){
            console.log(`A nota do aluno ${alunosIdadesNotas[i][j][k]}`)
        }
    }
}