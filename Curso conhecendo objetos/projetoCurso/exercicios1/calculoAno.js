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

const anoAtual = new Date().getFullYear();

console.log(`O livro foi publicado há ${anoAtual - livro.anoPublicacao} anos.`);