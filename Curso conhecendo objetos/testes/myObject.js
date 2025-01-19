var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

meuCarro["fabricacao"] = "Volksvagem";
meuCarro.cor = "azul"
meuCarro["cor"] = "vermelho"
meuCarro = {
    paisOrigem: "Russia",
    chassi: "123456789",
}

console.log(meuCarro);