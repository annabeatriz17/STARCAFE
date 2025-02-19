const express = require("express");
const cors = require("cors");
const menuRoutes = require("./src/routes/menuRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", menuRoutes);


app.get("/", (req, res) =>{
    res.send("AMO BACK-END!!")
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});