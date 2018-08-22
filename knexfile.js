const path = require('path');

const { DATABASE_URL } = process.env;
const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://username:password@localhost:5432/vocabulary_trainer_test',
        migrations: {
            directory: path.join(BASE_PATH, 'migrations'),
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds'),
        },
    },
    development: {
        client: 'pg',
        connection: 'postgres://username:password@localhost:5432/vocabulary_trainer',
        migrations: {
            directory: path.join(BASE_PATH, 'migrations'),
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds'),
        },
    },
    production: {
        client: 'pg',
        connection: DATABASE_URL,
        migrations: {
            directory: path.join(BASE_PATH, 'migrations'),
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds'),
        },
    },
};
