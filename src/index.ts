import Koa, { Context, DefaultState, Next } from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import { responseTime } from './utils/middleware-utils'
import { logger } from './utils/logger'
import Logger from 'bunyan'

export interface AppContext extends Context {
  log: Logger
}

export interface AppState extends DefaultState {
  id: string
}

const app: Koa<AppState, AppContext> = new Koa()

app.use(logger)

// x-response time
app.use(responseTime)
app.use(bodyParser())
app.use(helmet())

const router = new Router()

router.get('/', async (ctx: Context, next: Next) => {
  ctx.body = { msg: 'Hello World!' }
  await next()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Koa started :3000')
})
