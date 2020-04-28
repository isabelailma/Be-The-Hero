const knex = require('knex');
const configuration = require('../../knexfile');

/* Fazendo a conexão com o banco de teste */
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

/* Fazendo a conexão com o banco de dados de desenvolvimento */
const connection = knex(config);

/* Exportar variável connection */
module.exports = connection;