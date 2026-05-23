var quizModel = require("../models/quizModel");

function salvarMusica(req, res) {
    let pontos_ilha = req.body.ilhaServer
    let pontos_teEsperando = req.body.teEsperandoServer
    let pontos_ambienteErrado = req.body.ambienteErradoServer
    let pontos_mesmoSemEstar = req.body.mesmoSemEstarServer
    let idUsuario = req.body.idUsuarioServer

    quizModel.salvarMusica(pontos_ilha, pontos_teEsperando, pontos_ambienteErrado, pontos_mesmoSemEstar, idUsuario)
        .then(function (resposta) {
            res.json(resposta)
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao salvar a musica! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
}

function salvarPersonalidade(req, res) {
    let pontos_romantico = req.body.romanticoServer
    let pontos_animado = req.body.animadoServer
    let pontos_emotivo = req.body.emotivoServer
    let pontos_sofredor = req.body.sofredorServer
    let pontos_caseiro = req.body.caseiroServer
    let idUsuario = req.body.idUsuarioServer

    quizModel.salvarPersonalidade(pontos_romantico, pontos_animado, pontos_emotivo, pontos_sofredor, pontos_caseiro, idUsuario)
        .then(function (resposta) {
            res.json(resposta)
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao salvar a personalidade! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
}
module.exports = {
    salvarMusica,
    salvarPersonalidade
}
