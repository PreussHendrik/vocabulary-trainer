const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

const server = require('../src');
const knex = require('../src/db/connection');

chai.use(chaiHttp);

describe('route :: trainingItems', () => {
    beforeEach(() => {
        return knex.migrate
            .rollback()
            .then(() => {
                return knex.migrate.latest();
            })
            .then(() => {
                return knex.seed.run();
            });
    });

    afterEach(() => {
        return knex.migrate.rollback();
    });

    describe('GET /trainingItems', () => {
        it('should return all trainingItems (5)', done => {
            chai.request(server)
                .get('/trainingItems')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal('application/json');
                    res.body.data.length.should.eql(5);
                    res.body.data[0].should.include.keys(
                        'id',
                        'trainingId',
                        'wordId',
                        'level',
                        'nextCheck'
                    );
                    done();
                });
        });
    });
});
