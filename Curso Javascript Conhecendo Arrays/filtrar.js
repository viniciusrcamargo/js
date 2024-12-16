const alunos = ['Ana', 'André', 'Bruno', 'Carla'];
const medias = [7, 3, 9, 7.5];

const reprovados = alunos.filter((aluno, indice) =>{//retorna os alunos que tem média menor que 7
    return medias[indice] < 7;
});

console.log(reprovados);
