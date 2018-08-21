const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../src/index');

chai.use(chaiHttp);

describe('route :: index', () => {
    describe('GET /', () => {
        it('should be available', done => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    res.type.should.eql('text/html');
                    done();
                });
        });
    });
});
