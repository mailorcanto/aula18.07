//app contém todas as configurações que vamos rodar na nossa aplicação

//Importar o pacote express para criar o servidor
const express = require("express"); //outra forma de chamar o express: import express from 'express'

const app = express();

app.use(express.json()); //comando para o express usar o json

import userRouter from './router/userRouter';
   
app.use('/api/', userRouter);

export default app; //o que foi construído em app.ts está disponível para acesso em outros locais 
