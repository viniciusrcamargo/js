const nomes = ['Ana', 'Clara', 'João', 'Maria', 'Maria', 'João', 'Cesar'];

//const nomesAtualizados = [new Set(nomes)]; não retornou array
const listaNomesAtualizados = new Set(nomes);
const nomesAtualizados = [...new Set(nomes)];//dessa forma retorna como um array

//método set não funciona como array, pois não é um array , é um objeto
console.log(nomesAtualizados);
console.log(listaNomesAtualizados);