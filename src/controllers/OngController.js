const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

    //Listagem de dados da tabela
    async index(request, response) {

        //Selecionando todos os campos de todos os registros
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body

        //Criando o ID da ONG
        const id = crypto.randomBytes(4).toString('HEX')

        //Conectando no DB e criando ONG junto a connection
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    }
}