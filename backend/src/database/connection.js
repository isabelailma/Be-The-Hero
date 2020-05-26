require('dotenv/config');

const knex = require('knex');
const environment = process.env.NODE_ENV;
const config = require('../../knexfile')[environment];

/* Fazendo a conexão com o banco de dados */
const connection = knex(config);

/* Exportar variável connection */
module.exports = connection;