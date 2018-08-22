const Router = require('koa-router');
const { getAllTrainings, getTraining } = require('../db/queries/trainings');
const { getTrainingItemsForTraining } = require('../db/queries/trainingItems');

const router = new Router();
const BASE_URL = '/trainings';

router.get(BASE_URL, async ctx => {
    try {
        const trainings = await getAllTrainings();

        ctx.body = {
            status: 'success',
            data: trainings,
        };
    } catch (err) {
        console.log(err);
    }
});

router.get(`${BASE_URL}/:id`, async ctx => {
    try {
        const training = await getTraining(ctx.params.id);

        ctx.body = {
            status: 'success',
            data: training,
        };
    } catch (err) {
        console.log(err);
    }
});

router.get(`${BASE_URL}/:id/items`, async ctx => {
    try {
        let trainingItems = [];

        switch (ctx.query.q) {
            case 'toBeTrained':
                // items that
                trainingItems = []; // await getOpenTrainingItemsForTraining(ctx.params.id);
                break;
            default:
                trainingItems = await getTrainingItemsForTraining(ctx.params.id);
        }

        ctx.body = {
            status: 'success',
            data: trainingItems,
        };
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
