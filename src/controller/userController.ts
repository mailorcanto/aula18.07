import {Request, Response} from "express"; //apenas utilizar o Request e o Responde do pacote express, ao invés de todas as funcionalidades

//async serve para atualizar sem a necessidade de recarregar a 

const fs = require('fs'); //filesystem (não é necessário instalar este pacote, como fazemos com o express, pois é nativo do windows)
//Importar banco de dados de extensão .json
const data: string = './database.json'; //pacote fs precisa de uma string com o nome do arquivo para poder acessá-lo, ao invés de o caminho

async function listUser(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data); //chamando função readFileSync do pacote fs 
    res.send(JSON.parse(jsonData)); //analisar a string json e transformar dados em modelo javascript

    //const customer = req.body as Customer;
    //const result = await customerRepository.addCustomer(customer);
    //if (result)
      //  res.status(201).json(result);
    //else
      //  res.sendStatus(400);

}


async function postUser(req: Request, res: Response) {
        //atribui a base de dados em nova variavel
    const jsonDataBase = fs.readFileSync(data);

    //recupera o id enviado por parametro
    const userId = req.params.id;
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length;//criando variável index(índice) e utilizando para acessar as chaves do objeto content (onde estão os usuários cadastrados)
    
    //res.send(console.log(index));
    //console.log(req.body); //exibindo o usuário cadastrado 
    //atribui os dados da requisição ao usuario existente na base de dados
    content[index++] = req.body; //enviando usuário cadastrado para um índice do objeto
        
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content); //transformando novamente em string .json
        
    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);

    //retorno amigável para o usuário que o endpoint
    res.status(201).send("User registered");
}
/*
async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const success = await customerRepository.deleteCustomer(parseInt(id));
    if (success)
        res.sendStatus(204);
    else
        res.sendStatus(404);
}
*/

export default {
    listUser,
    postUser,
    //postCustomer,
    //patchCustomer,
    //deleteCustomer
}