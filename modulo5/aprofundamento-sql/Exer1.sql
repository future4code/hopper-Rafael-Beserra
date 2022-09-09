USE `Hopper-4314167-rafael-beserra`;

CREATE TABLE Projetos_Empresas (
	id VARCHAR(3) PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    title VARCHAR(40) NOT NULL,
    date DATE NOT NULL
);

SELECT * FROM Projetos_Empresas;