const { v4: uuid4 } = require("uuid");

class Order {
    constructor(id, item, status) {
        this.id = uuid4();
        this.item = item;
        this.status = status;
    }
}

module.exports = Order;