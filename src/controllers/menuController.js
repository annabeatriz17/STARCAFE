const Menu = require("../models/Menu");
const MenuList = require("../models/MenuList");

const list = new MenuList();

list.addMenu = new Menu("Pão de queijo", "R$10", "Salgado");
list.addMenu = new Menu("Expresso simples", "R$5", "Bebida");
list.addMenu = new Menu("Água", "R$3", "Bebida");
list.addMenu = new Menu("Café da manhã", "R$15", "Combo");
list.addMenu = new Menu("Salada de frutas", "R$10", "Salada");
list.addMenu = new Menu("Sanduíche", "R$5", "Sanduíche");

const router = {
    getAllMenu: (req, res) => {
        try {
            const menu = list.getAllMenu();
            return res.status(200).json(menu);
        } catch (error) {
            return res.status(404).json({message: "Erro ao buscar o menu", error});
        }
    },
};

module.exports = router;