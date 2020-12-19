const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization

        //Buscando incidentes atraves da conexao com a tabela no DB
        const incidents = await connection('incidents')
        //Buscando os ID's que essa mesma ONG criou
            .where('ong_id', ong_id)
            .select('*')

        return response.json('incidents')
    }
}