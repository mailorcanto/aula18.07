//importa o que configuramos no app e sobe para o servidor

import dotenv from 'dotenv';
dotenv.config();
import app from './app'; //importando dados do arquivo app

const PORT = process.env.PORT || 5000;

//iniciar o servidor
app.listen(PORT,()=>console.log('Servidor rodando na porta '+PORT)); //ouvindo a porta (poderia ser 1903, function listen (){})