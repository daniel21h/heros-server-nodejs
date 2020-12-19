
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments()

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        table.string('ong_id').notNullable()

        // criando a chave estrangeira para o id
        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};