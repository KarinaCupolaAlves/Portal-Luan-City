var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/BuscarDados/:idUsuario", function (req, res) {
    dashboardController.BuscarDados(req, res);
})

module.exports = router;