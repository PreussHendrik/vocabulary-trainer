exports.up = (knex, Promise) => {
    return knex.schema.createTable('trainingItems', table => {
        table.increments('id');
        table.integer('trainingId').references('trainings.id');
        table.integer('wordId').references('words.id');
        table.integer('level').defaultTo(1);
        table.timestamp('nextCheck').defaultTo(knex.fn.now());
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('trainingItems');
};
