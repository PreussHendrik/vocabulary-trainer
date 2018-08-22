const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

const server = require('../src');
const knex = require('../src/db/connection');

chai.use(chaiHttp);

describe('route :: trainings', () => {
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

    describe('GET /trainings', () => {
        it('should return all trainings', done => {
            chai.request(server)
                .get('/trainings')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal('application/json');
                    res.body.data.length.should.eql(1);
                    res.body.data[0].should.include.keys('id', 'userId', 'from', 'to');
                    done();
                });
        });
    });

    describe('GET /trainings/:id/items', () => {
        it(`should return all trainingItems for training with id=1`, done => {
            chai.request(server)
                .get('/trainings/1/items')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal('application/json');
                    res.body.data.length.should.eql(5);
                    res.body.data[0].should.include.keys(
                        'id',
                        'wordId',
                        'trainingId',
                        'level',
                        'nextCheck'
                    );
                    done();
                });
        });
    });
});
