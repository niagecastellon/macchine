DROP DATABASE IF EXISTS gestionemacchine;

CREATE DATABASE gestionemacchine;

USE gestionemacchine;

-- definizione tabelle
CREATE TABLE Macchine(
	numeroTelaio int primary key auto_increment,
	targa varchar(10),
    marca varchar(20),
    modello varchar(20),
    anno int,
    potenzaCV int,
    fkproprietario int
);

CREATE TABLE Proprietario(
	id int primary key auto_increment,
    nome varchar(20),
    cognome varchar(20),
    cap varchar(5),
    citta varchar(20),
    indirizzo varchar(50), 
    telefono varchar(15),
);

-- ---------------------------------------
-- definizione vincoli foreign key
-- ---------------------------------------

ALTER TABLE Macchine ADD CONSTRAINT FKProprietario FOREIGN KEY (fkproprietario) REFERENCES Proprietario(id);

-- ---------------------------------------
-- definizione vincoli 
-- ---------------------------------------