import app from './routes/userRouter'; //importando dados do app
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

//iniciar o servidor
app.listen(PORT,()=>console.log('Servidor rodando na porta '+PORT)); //ouvindo a porta (poderia ser 1903, function listen (){})