const { v4 : uuid4 } = require("uuid");

class produto {
    constructor(nome, preco, tipo) {
        this.id = uuid4();
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
    }
}

module.exports = Menu;