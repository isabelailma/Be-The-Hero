/* Importando o módulo express para a variável express */
const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

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
 routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
     name: Joi.string().required(),
     email: Joi.string().required().email(),
     whatsapp: Joi.string().required().min(10).max(11),
     city: Joi.string().required(),
     uf: Joi.string().required().length(2),
   })
 }), OngController.create);

/* Listando todos os casos de uma ONG específica */
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

/* Listando todos os casos */
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

/* Cadastrando um novo caso */
routes.post('/incidents', IncidentController.create);

/* Deletando um caso */
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

/* Exportar variável routes */
module.exports = routes;