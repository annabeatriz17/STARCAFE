const Order = require("../models/Order");
const OrderList = require("../models/OrderList");

const list = new OrderList();

list.addOrder = new Order(1, "Pão de queijo", "Pendente");
list.addOrder = new Order(2, "Expresso simples", "Preparando");

const router = {
    addOrder: (req, res) => {
        try {
            const { item, status } = req.body;
            if (!item || !status) {
                throw new Error("Preencha todos os campos");
        }
        const order = new Order(null, item, status);
        res.status(201).json({message: "Pedido feito com sucesso", order});
        } catch (error) {
            return res.status(400).json({message: "Erro ao adicionar pedido", error});
        }
    },
    getAllOrder: (req, res) => {
        try {
            const order = list.getAllOrder();
            return res.status(200).json(order);
        } catch (error) {
            return res.status(404).json({message: "Erro ao encontrar pedido", error});
        }
    },
    getOrderById: (req, res) => {
        try {
            const id = req.params.id;
            return res.status(200).json(list.getOrderById(id));   
        } catch (error) {
            res.status(404).json({message: "Erro ao encontrar o pedido por id", error});
        }
    },
    deleteOrder: (req, res) => {
        try {
            list.deleteOrder(req.params.id);
            return res.status(200).json({message: "Pedido cancelado com sucesso"});
        } catch (error) {
            return res.status(404).json({message: "Erro ao cancelar pedido", error});
        }
    },
};

module.exports = router;