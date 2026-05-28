var database = require("../database/config")

async function BuscarDados(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarMusica():")
    var instrucaoSql1 = `
        SELECT 
    ilha,
    te_esperando,
    ambiente_errado,
    mesmo_sem_estar
		FROM usuario_musica WHERE fk_usuario = ${idUsuario}
	ORDER BY dt_quiz DESC
    LIMIT 1;
    `;

    var instrucaoSql2 = `
        SELECT 
    romantico,
    animado,
    emotivo,
    sofredor
		FROM usuario_personalidade WHERE fk_usuario = ${idUsuario}
	ORDER BY dt_quiz DESC
    LIMIT 1;
    `;

    var instrucaoSql3 = `
        SELECT pontos AS quiz1
        FROM usuarioNivelFa
        WHERE fk_usuario = ${idUsuario}
        ORDER BY dt_quiz DESC
        LIMIT 1;
    `;

    var instrucaoSql4 = `
        SELECT pontos AS quiz3
        FROM usuario_pontuacao
        WHERE fk_usuario = ${idUsuario}
        ORDER BY dt_quiz DESC
        LIMIT 1;
    `;

    const resultado1 = await database.executar(instrucaoSql1);
    const resultado2 = await database.executar(instrucaoSql2);
    const resultado3 = await database.executar(instrucaoSql3);
    const resultado4 = await database.executar(instrucaoSql4);

    return {
        quiz1: resultado3[0].quiz1,
        quiz3: resultado4[0].quiz3,

        ilha: resultado1[0].ilha,
        te_esperando: resultado1[0].te_esperando,
        ambiente_errado: resultado1[0].ambiente_errado,
        mesmo_sem_estar: resultado1[0].mesmo_sem_estar,

        romantico: resultado2[0].romantico,
        animado: resultado2[0].animado,
        emotivo: resultado2[0].emotivo,
        sofredor: resultado2[0].sofredor
    };
}
module.exports = {
    BuscarDados
};