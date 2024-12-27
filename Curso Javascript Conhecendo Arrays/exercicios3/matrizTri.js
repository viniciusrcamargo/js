let alunosIdadesNotas = [
    [
        ['João', 'José', 'Maria', 'Ana']
    ],
    [
        [15, 17, 14, 16],
        [8, 7, 9.5, 10]
    ]
];

let nomes = alunosIdadesNotas[0][0]; // Array de nomes
let idades = alunosIdadesNotas[1][0]; // Array de idades
let notas = alunosIdadesNotas[1][1]; // Array de notas

for (let i = 0; i < nomes.length; i++) {
    console.log(`O aluno ${nomes[i]} tem ${idades[i]} anos e tirou nota ${notas[i]}.`);
}