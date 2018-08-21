const Koa = require('koa');
const docs = require('koa-docs');

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(
    docs.get('/', {
        title: 'vocabulary-trainer',
        version: '0.0.1',
        theme: 'Lumen',
        routeHandlers: 'disabled',
        groups: [],
    })
);

module.exports = app.listen(PORT, () => console.info(`✅ server linening on port ${PORT}`));
