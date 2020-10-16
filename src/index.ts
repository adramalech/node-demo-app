import Koa, { DefaultContext, DefaultState } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app: Koa<DefaultState, DefaultContext> = new Koa();

app.use(bodyParser());

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = { msg: 'Hello World!' };

    await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Koa started :3000');
});
