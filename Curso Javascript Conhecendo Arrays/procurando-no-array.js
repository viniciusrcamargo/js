const alunos = ['Josepha', 'Jonas', 'Sérgio', 'Jorge', 'José Carlos']
const notas = [10, 8, 7, 9, 6]

const lista = [alunos,notas];

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno)
        const nota = lista[1][indice]
        console.log(`${aluno} tem a nota ${nota}`)
    }else{
        console.log('Aluno não encontrado')
    }
}

exibeNomeENota('José Carlos')
exibeNomeENota('Joso')