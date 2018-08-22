exports.up = (knex, Promise) => {
    return knex.schema.createTable('trainings', table => {
        table.increments('id');
        table.integer('userId').references('users.id');
        table.string('from', 8);
        table.string('to', 8);
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('trainings');
};
