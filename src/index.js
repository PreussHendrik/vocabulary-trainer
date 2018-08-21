const Koa = require('koa');
const docs = require('koa-docs');

const app = new Koa();

const PORT = process.env.PORT || 3000;
const HTTP_STATUSCODE_OK = 200;

app.use(
    docs.get('/', {
        title: 'vocabulary-trainer',
        version: '0.0.1',
        routeHandlers: 'disabled',
        groups: [],
    })
);

module.exports = app.listen(PORT, () => console.info(`✅ server linening on port ${PORT}`));
