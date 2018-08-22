const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const trainingRoutes = require('./routes/trainings');
const trainingItemRoutes = require('./routes/trainingItems');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(trainingRoutes.routes());
app.use(trainingItemRoutes.routes());

module.exports = app.listen(PORT, () => console.info(`✅   server linening on port ${PORT}`));
