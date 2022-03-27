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
-- é a condição que vai ser usada para selecionar os dados
SELECT * FROM usuarios WHERE idade > 10;
-- selecionei todos os dados da tabela onde a idade é maior que 10


-- DELETE serve para deletar dados da tabela
-- nunca usar DELETE sem um WHERE
DELETE FROM usuarios WHERE nome = 'Paulo';
-- deleta todos os dados da tabela onde o nome é Paulo

-- UPDATE serve para atualizar dados da tabela
-- Set serve para selecionar os dados que serão atualizados
-- para atualizar mais de um campo, use virgula para separar os campos.
-- exemplo: SET nome = 'Paulo', email = '
UPDATE usuarios SET nome = 'Victor' WHERE nome = 'julia';
-- atualiza todos os dados da tabela onde o nome é julia para victor

-- a biblioteca sequelize é uma biblioteca para criar banco de dados e manipular dados 
-- para instalar a biblioteca: npm install sequelize
-- para trabalhar com mysql, usar o sequelize e mysql

