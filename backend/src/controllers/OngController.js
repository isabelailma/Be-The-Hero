const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    /* Listar todas as ONG's */
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    /* Cadastrar uma nova ONG */
    async create(request, response) {
        /* Pegando dados da ong via requisição */
        const { name, email, whatsapp, city, uf } = request.body;
        /* Gerando id randomicamente */
        const id = crypto.randomBytes(4).toString('HEX');
    
        /* Fazendo a inserção no banco de dados*/
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};