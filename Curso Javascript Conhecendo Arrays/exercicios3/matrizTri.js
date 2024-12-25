let alunosIdadesNotas = [
    [
        ['João','José','Maria','Ana'],
    ]
    [
        [15,17,14,16],
        [8,7,9.5,8.5]
    ]
    
]

for(let i = 0; i < alunosIdadesNotas.length; i++ ){
    for(let j = 0; j < alunosIdadesNotas[i].length; j++){
        for(let k = 0; k < alunosIdadesNotas[i][j].length; k++){
            console.log(alunosIdadesNotas[i][j][k])
        }
    }
}