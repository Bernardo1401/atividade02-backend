const { v4 : uuid4 } = require("uuid");
const produto = require("./Produto");

class Pedido {
    constructor(produto, quantidade, status) {
        this.id = uuid4();
        this.produto = produto.getProdutoById(produto);
        this.quantidade = quantidade;
        this.status = status
    }
} 

module.exports = Pedido