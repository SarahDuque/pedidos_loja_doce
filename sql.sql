create database pedido_loja_doces;
use pedido_loja_doces;
drop table pedidos;
CREATE TABLE clientes (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL ,
  `endereco` VARCHAR(200) NOT NULL ,
  PRIMARY KEY (`id_cliente`)
  );

CREATE TABLE pedidos (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `descricao` varchar(200) NOT NULL,
  `valor_total` real NOT NULL,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_pedido`, `id_cliente`),
  INDEX `id_cliente_idx` (`id_cliente` ASC) ,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `clientes` (`id_cliente`)
);
select * from clientes;
select * from pedidos;

insert into clientes values(
null,
"Sarah",
"Balneário"
);

insert into clientes values(
null,
"Anna",
"Cariacica"
);

insert into pedidos values(
null,
"Dois brigadeiros",
4.50,
1
);

insert into pedidos values(
null,
"3 brigadeiros",
5.30,
2
);