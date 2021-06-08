import Koa, { Context, Next } from 'koa'
import Router from 'koa-router'

export const buildRoutes = (): Router<any, {}> => {
  const router = new Router()

  return router
}
