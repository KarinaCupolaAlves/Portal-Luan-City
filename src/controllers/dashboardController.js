var dashboardModel = require("../models/dashboardModel");

function BuscarDados(req, res) {
    let idUsuario = req.params.idUsuario;
    
    dashboardModel.BuscarDados(idUsuario)
        .then(function (resposta) {
            console.log(resposta)
            res.json(resposta)
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao buscar dados da dash! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    BuscarDados
}
