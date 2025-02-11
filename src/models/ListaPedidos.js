class ListaPedidos {
    constructor() {
        this.pedidos = [];
    }
    addPedido(pedido) {
        this.pedidos.push(pedido);
    }
    getPedidoById(id) {
        const pedido = this.pedidos.find((pedido) => pedido.id == id);
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        return song;
    }

    deletePedido(id) {
        this.pedidos = this.pedidos.filter((pedido) => pedido.id != id);
    }
}

module.exports = ListaPedidos;