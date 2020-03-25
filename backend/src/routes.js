/* Importando o módulo express para a variável express */
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* Desaclopando o módulo de rotas do express em uma variável */
const routes = express.Router();

/* Rota / Recurso */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviado na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recusos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where() (KNEX)
  */

/* Fazendo Login - Iniciando uma sessão */
routes.post('/sessions', SessionController.create);

/* Listando todas as ONG's */
routes.get('/ongs', OngController.index);
/* Cadastrando uma nova ONG */
 routes.post('/ongs', OngController.create);

/* Listando todos os casos de uma ONG específica */
routes.get('/profile', ProfileController.index);

/* Listando todos os casos */
routes.get('/incidents', IncidentController.index);
/* Cadastrando um novo caso */
routes.post('/incidents', IncidentController.create);
/* Deletando um caso */
routes.delete('/incidents/:id', IncidentController.delete);

/* Exportar variável routes */
module.exports = routes;