CREATE DATABASE luan_city;
USE luan_city;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
telefone CHAR(11),
dt_nasc DATE
);
SELECT * FROM usuario;

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nomeQuiz VARCHAR(100)
);

CREATE TABLE resultadoQuiz(
	idResultado INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	fkQuiz INT,
	pontuação INT,
	dt_quiz DATETIME,
	FOREIGN KEY(fk_usuario)
	REFERENCES usuario(id_usuaario),
	FOREIGN KEY(fkQuiz)
	REFERENCES quiz(idQuiz)
	);

 CREATE TABLE usuario_musica (
  idMusica INT PRIMARY KEY AUTO_INCREMENT,
  ilha INT,
  te_esperando INT,
  ambiente_errado INT,
  mesmo_sem_estar INT,
  fk_usuario INT,
  FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario)
);
 
SELECT * FROM usuario_musica;
CREATE TABLE usuario_personalidade (
  idPersonalidade INT PRIMARY KEY AUTO_INCREMENT,
  romantico INT,
  animado INT,
  emotivo INT,
  sofredor INT,
  caseiro INT,
  fk_usuario INT,
  FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario)
);
SELECT * FROM usuario_personalidade;

CREATE TABLE usuarioNivelFa(
idNivel INT PRIMARY KEY AUTO_INCREMENT,
pontos INT,
dt_quiz TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario)
);

SELECT * FROM usuarioNivelFa;
CREATE TABLE usuario_pontuacao(
idAcertos INT PRIMARY KEY AUTO_INCREMENT,
pontos INT,
dt_quiz TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario)
);

SELECT * FROM usuario_pontuacao;
INSERT INTO usuario (nome,email,senha,telefone, dt_nasc) VALUES
('Karina Cupola','karinacupola@gmail.com','karina@123','2027-10-22',true);

INSERT INTO quiz (nomeQuiz) VALUES
('O quanto você conhece o Luan Santana?'),
('Qual música do Luan Santana você é?'),
('Adivinhe a música do Luan Santana pelo trecho	');


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
    ON upo.fk_usuario = u.id_usuario;
    
