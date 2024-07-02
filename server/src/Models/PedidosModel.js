import mysql from "mysql2"
import config from "../Config.js";

class PedidosModel {
    constructor(){
        this.conexao = mysql.createConnection(config.db);
        
    }
    create(descricao,valor_total,id_cliente){
       let sql = `insert into pedidos (descricao,valor_total,id_cliente) values("${descricao} ","${valor_total} " , "${id_cliente}");`;
        
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Pedido Adicionado"])
            })
        })

    }
    read(){
        let sql = `select * from pedidos;`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        })
    }

    update(id_pedido,descricao,valor_total,id_cliente){
        let sql = `update pedidos set descricao = "${descricao}",valor_total = "${valor_total}" where id_pedido="${id_pedido}" and id_cliente ="${id_cliente}" ;`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Pedido não encontrado"])
                }
            })
        });
    }

    delete(id_pedido){
        let sql = `delete from pedidos where id_pedido="${id_pedido}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Pedido não encontrado"])
                }
            })
        });
    }
}

export default new PedidosModel()