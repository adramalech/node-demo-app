import Koa, { DefaultContext, DefaultState } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app: Koa<DefaultState, DefaultContext> = new Koa();

app.use(bodyParser());

const router: Router<any, {}> = new Router();
