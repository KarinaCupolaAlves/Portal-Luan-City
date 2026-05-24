var database = require("../database/config")

function salvarMusica(pontos_ilha, pontos_teEsperando, pontos_ambienteErrado, pontos_mesmoSemEstar, idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarMusica():")
    var instrucaoSql = `
        INSERT INTO usuario_musica (ilha, te_esperando, ambiente_errado, mesmo_sem_estar, fk_usuario) VALUES
        (${pontos_ilha}, ${pontos_teEsperando}, ${pontos_ambienteErrado}, ${pontos_mesmoSemEstar}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarPersonalidade(pontos_romantico, pontos_animado, pontos_emotivo, pontos_sofredor, pontos_caseiro, idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarPersonalidade():")
    var instrucaoSql = `
        INSERT INTO usuario_personalidade (romantico, animado, emotivo, sofredor, caseiro, fk_usuario) VALUES
        (${pontos_romantico}, ${pontos_animado}, ${pontos_emotivo}, ${pontos_sofredor}, ${pontos_caseiro},${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarNivel(pontos, idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarNivel():")
    var instrucaoSql = `
        INSERT INTO usuarioNivelFa(pontos,fk_usuario)VALUES
        (${pontos},${idUsuario})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarPontos(pontos, idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarPontos():")
    var instrucaoSql = `
        INSERT INTO usuario_pontuacao(pontos,fk_usuario)VALUES
        (${pontos},${idUsuario})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarMusica,
    salvarPersonalidade,
    salvarNivel,
    salvarPontos
};



