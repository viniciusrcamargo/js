const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: '',
    genero: ''
}

livro["titulo"] = 'O diário de Santa Faustina';
livro["autor"] = 'Sofia de Souza';
livro["anoPublicacao"] = 2018;
livro["genero"] = 'Infantil';

// console.log(livro);

console.log(`O título do livro é ${livro.titulo}, o autor é ${livro.autor}, o ano de publicação é ${livro.anoPublicacao} e o gênero é ${livro.genero}.`);