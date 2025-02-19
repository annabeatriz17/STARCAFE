const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");
const orderController = require("../controllers/orderController");

router.get("/menu", menuController.getAllMenu);
router.get("/ordem", orderController.getAllOrder);
router.get("/ordem/:id", orderController.getOrderById);
router.post("/ordem", orderController.addOrder);
router.delete("/ordem/:id", orderController.deleteOrder);

module.exports = router;