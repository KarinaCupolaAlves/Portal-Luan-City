-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE luan_city;
USE luan_city;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
dt_nasc DATE,
ja_escutou BOOLEAN
);

INSERT INTO usuario (nome,email,senha,dt_nasc,ja_escutou) VALUES
('Karina Cupola','karinacupola@gmail.com','karina@123','2027-10-22',true);



