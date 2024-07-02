import express from "express"; // Importando o express
import PedidosController from "./Controllers/PedidosController.js";
import ClientesController from "./Controllers/ClientesController.js";

const server = express(); // Iniciando o express

server.use(express.json()); // Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.get('/pedidos',PedidosController.read)

server.post('/pedidos',PedidosController.create)

server.put('/pedidos/:id_pedido',PedidosController.update)

server.delete('/pedidos/:id_pedido',PedidosController.delete)


server.get('/clientes',ClientesController.read)

server.post('/clientes',ClientesController.create)

server.put('/clientes/:id_cliente',ClientesController.update)

server.delete('/clientes/:id_cliente',ClientesController.delete)

server.listen(5000);