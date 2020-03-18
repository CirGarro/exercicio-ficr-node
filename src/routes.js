const express = require('express');
const routes = express.Router();
const TarefaController = require('./control/TarefaController');

routes.get("/tarefas", TarefaController.index);
routes.post("/tarefas",TarefaController.create);
routes.get('/tarefas/:id', TarefaController.detalhe);
routes.put('/tarefas/:id', TarefaController.update);
routes.delete('/tarefas/:id', TarefaController.delete);
module.exports = routes;