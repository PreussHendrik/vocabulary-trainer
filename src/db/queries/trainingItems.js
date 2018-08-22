const knex = require('../connection');

function getAllTrainingItems() {
    return knex('trainingItems').select('*');
}

function getTrainingItemsForTraining(trainingId) {
    return knex('trainingItems')
        .select('*')
        .where('trainingId', trainingId);
}

module.exports = {
    getAllTrainingItems,
    getTrainingItemsForTraining,
};
