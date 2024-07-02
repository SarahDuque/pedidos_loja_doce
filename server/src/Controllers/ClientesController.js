import ClientesModel from "../Models/ClientesModel.js";

class ClientesController{
    constructor(){
    }
    create(req,res){
        const nome = req.body.nome;
        const endereco = req.body.endereco;
        ClientesModel.create(nome,endereco).then(
            resposta =>{
                console.debug("Incerindo um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao inserir um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )

    }

    read(req,res){
        ClientesModel.read().then(
            resposta =>{
                console.debug("Mostrando um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao mostrar um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_cliente = req.params.id_cliente;
        const nome = req.body.nome;
        const endereco = req.body.endereco;

        ClientesModel.update(id_cliente,nome,endereco).then(
            resposta =>{
                console.debug("Atualizando um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao atualizar um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    delete(req,res){
        const id_cliente = req.params.id_cliente;

        ClientesModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Deletando um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro ao deletar um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}
export default new ClientesController();