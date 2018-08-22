const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const dbConfig = require('../../knexfile.js')[environment];

module.exports = knex(dbConfig);
