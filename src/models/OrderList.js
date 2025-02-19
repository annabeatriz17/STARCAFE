class OrderList {
    constructor() {
        this.order = [];
    }
    addOrder(order) {
        this.order.push(order);
    }
    getAllOrder() {
        return this.order;
    }
    getOrderById(id) {
        const order = this.order.find(order => order.id == id);
        if (!order) {
            throw new Error("Pedido não encontrado");
        }
        return order;
    }
    deleteOrder(id) {
        this.order = this.order.filter(order => order.id != id);
    }
}

module.exports = OrderList;