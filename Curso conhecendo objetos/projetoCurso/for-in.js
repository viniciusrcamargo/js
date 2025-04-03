const estudante = {
    nome: 'Maria',
    idade: 39,
    cpf: '123.456.789-00',
    bolsista: true,
    telefone: ['18 999898989', '19 88887777'],
    enderecos: [{
        rua: 'Rua das Flores',
        numero: 123,
        bairro: 'Centro',
    },
    {
        rua: 'Rua dos Lírios',
        numero: 123,
        bairro: 'Jardim'
    }]
}


for(let chave in estudante) {
    const tipo = typeof estudante[chave];
    const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
    console.log(chave);
}