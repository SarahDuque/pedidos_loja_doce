import mysql from "mysql2"
import config from "../Config.js";

class ClientesModel {
    constructor(){
        this.conexao = mysql.createConnection(config.db);
        
    }
    create(nome,endereco){
       let sql = `insert into clientes (nome,endereco) values("${nome}","${endereco}");`;
        
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Cliente Adicionado"])
            })
        })

    }
    read(){
        let sql = `select * from clientes;`;

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

    update(id_cliente,nome,endereco){
        let sql = `update clientes set nome = "${nome}", endereco = "${endereco}" where id_cliente="${id_cliente}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Cliente não encontrado"])
                }
            })
        });
    }

    delete(id_cliente){
        let sql = `delete from clientes where id_cliente="${id_cliente}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Cliente não encontrado"])
                }
            })
        });
    }
}

export default new ClientesModel()