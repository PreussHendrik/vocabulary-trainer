const knex = require('../connection');

function getAllTrainings() {
    return knex('trainings').select('*');
}

function getTraining(id) {
    return knex('trainings')
        .first()
        .where('id', id);
}

module.exports = {
    getAllTrainings,
    getTraining,
};
