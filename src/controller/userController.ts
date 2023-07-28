import {Request, Response} from "express"; //apenas utilizar o Request e o Responde do pacote express, ao invés de todas as funcionalidades

import db from '../config/database';

async function getUser(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients',(err, results)=>{ //Query é uma solicitação de informações feita ao banco de dados. que retorna uma tabela ou um conjunto delas, figuras, gráficos ou resultados complexos.
        console.log(results);
        res.send(results);
    }); 
}

async function postUser(req: Request, res: Response) {
    const querysql = 'INSERT INTO clients(DS_NAME,NM_CELLPHONE,DS_STATUS)VALUES (?,?,?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS
    );

    db.connection.query(querysql,params, (err, results)=>{
        res.send('Cadastrado realizado com sucesso')
    });
}

// async function putUser(req: Request, res: Response) {
//     let id = req.params.id;
//     const querysql = "UPDATE clients SET DS_NAME=?,NM_CELLPHONE=?, DS_STATUS=? WHERE id=?;";
//     const params = Array(
//         req.body.DS_NAME,
//         req.body.NM_CELLPHONE,
//         req.body.DS_STATUS
//     );
//     db.connection.query(querysql, [params,id], (err, results)=>{
//         res.send('Atualização realizada com sucesso')
//     });
// }

// async function deleteUser(req: Request, res: Response) {
//     db.connection.query('DELETE FROM clients WHERE id=?', [req.params.id],  (err, results)=>{
//         res.send('Usuário deletado com sucesso');
//     });
// }

export default {
    getUser,
    postUser,
    //putUser,
    //deleteUser
}