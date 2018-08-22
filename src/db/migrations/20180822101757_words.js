exports.up = (knex, Promise) => {
    return knex.schema.createTable('words', table => {
        table.increments('id');
        table.string('de', 64);
        table.string('fr', 64);
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('words');
};
