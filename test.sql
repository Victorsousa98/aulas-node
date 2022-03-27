-- para criar uma tabela 
-- o vachar serve para definir o tamanho da coluna 
CREATE TABLE usuarios(
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    idade INT NOT NULL
)

-- INSERT serve para inserir dados na tabela
-- insira em usuarios o nome, email e idade 
INSERT INTO usuarios(nome, email, idade) VALUES(
    'Julia',
    'julia@email.com',
    8
);

-- SHOW TABLES serve para mostrar as tabelas
-- DESCRIBE serve para descrever a tabela
-- SELECT serve para selecionar os dados da tabela
SELECT * FROM usuarios;
-- * significa todos os dados da tabela

-- WHERE serve para selecionar dados especificos da tabela
SELECT * FROM usuarios WHERE idade > 10;
-- selecionei todos os dados da tabela onde a idade é maior que 10