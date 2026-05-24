var database = require("../database/config")

function BuscarDados(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarMusica():")
    var instrucaoSql = `
    SELECT 
	u.nome,
	um.ilha, um.te_esperando,
    um.ambiente_errado, um.mesmo_sem_estar,
    um.fk_usuario, 
    upe.romantico, upe.animado, 
    upe.emotivo, upe.sofredor, upe.caseiro, 
    unf.pontos AS quiz1,
    upo.pontos AS quiz3
    FROM usuario u
    LEFT JOIN usuario_musica um
    ON um.fk_usuario = u.id_usuario
    LEFT JOIN usuario_personalidade upe
    ON upe.fk_usuario = u.id_usuario
    LEFT JOIN usuarioNivelFa unf
    ON unf.fk_usuario = u.id_usuario	
    LEFT JOIN usuario_pontuacao upo
    ON upo.fk_usuario = u.id_usuario
    WHERE id_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    BuscarDados
};