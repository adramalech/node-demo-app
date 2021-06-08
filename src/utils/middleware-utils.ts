import { Context, Next } from 'koa'
import { AppContext } from 'src'
import * as uuid from 'uuid'

export const responseTime = async (ctx: Context, next: Next): Promise<void> => {
  const startTime = Date.now()
  await next()
  const ms = Date.now() - startTime
  ctx.set('X-Response-Time', `${ms}ms`)
}

export const requestId = async (ctx: AppContext, next: Next): Promise<void> => {
  const requestId = ctx.request.get('X-Request-Id') || uuid.v4()
  ctx['reqId'] = requestId
  ctx.request.set('reqId', requestId)
  ctx.log
}
