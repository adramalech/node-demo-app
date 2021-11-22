import { Context, Next } from 'koa'
import { AppContext } from 'src'
import { randomUUID } from 'crypto'

export const responseTime = async (ctx: Context, next: Next): Promise<void> => {
  const startTime = Date.now()
  await next()
  const ms = Date.now() - startTime
  ctx.set('X-Response-Time', `${ms}ms`)
}

export const requestId = async (ctx: AppContext, next: Next): Promise<void> => {
  const requestId = ctx.request.get('X-Request-Id') || randomUUID()
  const id = ctx.get('X-Request-Id')

  if (!id) {
    ctx.set('X-Request-Id', randomUUID())
  }

  ctx.state.reqId = id

  ctx['reqId'] = requestId

  return next()
}
