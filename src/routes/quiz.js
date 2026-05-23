var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função quiz de quizController.js
router.post("/salvar_musica", function (req, res) {
    quizController.salvarMusica(req, res);
})

router.post("/salvar_personalidade", function (req, res) {
    quizController.salvarPersonalidade(req, res);
});

router.post("/salvar_musica", function (req, res) {
    quizController.salvarMusica(req, res);
})

router.post("/salvar_personalidade", function (req, res) {
    quizController.salvarPersonalidade(req, res);
});


module.exports = router;

