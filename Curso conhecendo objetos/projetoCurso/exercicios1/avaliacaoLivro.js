const livro = {
    titulo: 'O senhor dos anéis',
    autor: 'J.R.R Tolkien',
    anoPublicacao: '1958',
    genero: 'Ficção'
}

livro.avaliacao = 'ótimo';

if(livro.avaliacao == null){
    console.log('O livro não foi avaliado.');
}else{
    console.log(`A avaliação do livro é ${livro.avaliacao}`);
}