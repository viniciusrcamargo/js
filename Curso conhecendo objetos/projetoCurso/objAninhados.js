const estudante = {
    nome: 'Maria',
    idade: 39,
    cpf: '123.456.789-00',
    bolsista: true,
    cursos: ['Desenvolvimento Web', 'Análise de Dados', 'Estatística']
}

estudante.endereco = {
    rua: 'Rua dos Lírios',
    numero: 123,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP'
}

console.log(estudante); // Saída: Análise de Dados
console.log(estudante.endereco.rua);// acessando objetos dentro de objetos
