/* Importando o módulo express para a variável express */
const express = require('express');
/* Importando módulo de segurança CORS*/
const cors = require('cors')
/* Importando celebrate */
const { errors } = require('celebrate');
/* Importando variável routes de outro arquivo */
const routes = require('./routes')

/* Instanciar aplicação */
const app = express();

app.use(cors());
/* Informando ao express que iremos trabalhar com objeto JSON nas requisições */
app.use(express.json());

app.use(routes);
app.use(errors());

module.exports = app;