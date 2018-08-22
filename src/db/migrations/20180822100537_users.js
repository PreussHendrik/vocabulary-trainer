exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('name', 32);
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
};
