const express = require('express');

import userController from '../controller/userController';

//Instancia o express na variável router
const router = express.Router();

//listar usuários
router.get('/users', userController.getUser);

//Cadastrar usuario
router.post('/users', userController.postUser);

//Alterar usuário
router.put('/user/:id', userController.putUser);

//Deletar usuário
router.delete('/user/:id', userController.deleteUser);

export default router; //o que foi construído em app.ts está disponível para acesso em outros locais 


