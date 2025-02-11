const { v4 : uuid4 } = require("uuid");

class Pedido {
    constructor(produto, quantidade, status) {
        this.id = uuid4();
        this.produto = produto;
        this.quantidade = quantidade;
        this.status = status
    }
} 