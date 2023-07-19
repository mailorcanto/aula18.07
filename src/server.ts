//Importar o pacote express para criar o servidor
const express = require("express"); //outra forma de chamar o express: import express from 'express'
//Importar o pacote File System para manipular arquivos
const fs = require('fs'); //filesystem (não é necessário instalar este pacote, como fazemos com o express, pois é nativo do windows)
//Importar banco de dados de extensão .json
const data: string = './database.json'; //pacote fs precisa de uma string com o nome do arquivo para poder acessá-lo, ao invés de o caminho
//Instancia o express na variável app
const app = express()
//
app.use(express.json()); //comando para o express usar o json

//listar usuários
app.get('/api/users', (req: any, res: any) => {
    const jsonData = fs.readFileSync(data); //chamando função readFileSync do pacote fs 
    res.send(JSON.parse(jsonData)); //analisar a string json e transformar dados em modelo javascript
});

//Cadastrar usuario
app.post('/api/users', (req: any, res: any) => {
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

    res.status(201).send("User registered");
    
    //retorno amigável para o usuário que o endpoint
    //res.send(`User with id ${userId} has been updated`)
});

//Alterar usuário
app.put('/api/user/:id', (req: any, res: any) => {
    //atribui a base de dados em nova variavel
    const jsonDataBase = fs.readFileSync(data);

    //recupera o id enviado por parametro
    const userId = req.params.id;
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //atribui os dados da requisição ao usuario existente na base de dados
    content[userId] = req.body;
    
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content);
    
    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);

    //retorno amigável para o usuário que o endpoint
    res.send(`User with id ${userId} has been updated`)
});


//Deletar usuário
app.delete('/api/user/:id', (req: any, res: any) => {
    //atribui a base de dados em nova variavel
    const jsonDataBase = fs.readFileSync(data);

    //recupera o id enviado por parametro
    const userId = req.params.id; //atributo params
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //delete
    delete content[userId];
    
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content);

    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);

    //retorno amigável para o usuário que o endpoint
    res.send(`User with id ${userId} has been deleted`);
});

//iniciar o servidor
app.listen(1903,()=>console.log('Servidor rodando na porta 1903')); //ouvindo a porta (poderia ser 1903, function listen (){})