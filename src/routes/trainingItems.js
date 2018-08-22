const Router = require('koa-router');
const queries = require('../db/queries/trainingItems');

const router = new Router();
const BASE_URL = '/trainingItems';

router.get(BASE_URL, async ctx => {
    try {
        const trainingItems = await queries.getAllTrainingItems();

        ctx.body = {
            status: 'success',
            data: trainingItems,
        };
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
