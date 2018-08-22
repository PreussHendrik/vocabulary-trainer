exports.seed = (knex, Promise) => {
    return Promise.all([
        knex('words').del(),
        knex('trainingItems').del(),
        knex('trainings').del(),
        knex('users').del(),
    ]).then(() => {
        return knex('users')
            .then(() => {
                return knex('users').insert({
                    name: 'Test User',
                });
            })
            .then(() => {
                return knex('words').insert({
                    de: 'Mensch; Mann',
                    fr: 'homme (m)',
                });
            })
            .then(() => {
                return knex('words').insert({
                    de: 'à, je, zu',
                    fr: 'à raison de',
                });
            })
            .then(() => {
                return knex('words').insert({
                    de: 'groß',
                    fr: 'grand',
                });
            })
            .then(() => {
                return knex('words').insert({
                    de: 'kennen',
                    fr: 'connaître',
                });
            })
            .then(() => {
                return knex('words').insert({
                    de: 'was',
                    fr: 'quoi',
                });
            })
            .then(() => {
                return knex.first('id').from('users');
            })
            .then(({ id: userId }) =>
                knex('trainings').insert({
                    userId,
                    from: 'de',
                    to: 'fr',
                })
            )
            .then(() => {
                return knex('trainingItems')
                    .then(() => {
                        return Promise.all([
                            knex.first('id').from('trainings'),
                            knex.pluck('id').from('words'),
                        ]);
                    })
                    .then(res => {
                        const trainingId = res[0].id;
                        const wordIdList = res[1];

                        return knex('trainingItems').insert(
                            wordIdList.map(wordId => ({
                                trainingId,
                                wordId,
                            }))
                        );
                    });
            });
    });
};
