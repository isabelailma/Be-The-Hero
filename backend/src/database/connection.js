const knex = require('knex');
const configuration = require('../../knexfile');

/* Fazendo a conexão com o banco de dados de desenvolvimento */
const connection = knex(configuration.development);

/* Exportar variável connection */
module.exports = connection;