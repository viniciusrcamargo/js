const alunos = ['Ana', 'Gabriel', 'Caio','Juca']
const medias = [10, 8, 7.5, 9]

const listas = [alunos, medias]

for(let i = 0; i < listas.length; i++){
    for(let j = 0; j < listas[i].length; j++){
        console.log(listas[i][j])
    }
}
