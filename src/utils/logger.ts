import Logger, { createLogger, LogLevel, stdSerializers } from 'bunyan'
import { Context, Next } from 'koa'

interface Input {
  name: string
  level: LogLevel
}

const buildLogger = ({ name, level }: Input): Logger =>
  createLogger({
    level,
    name,
    serializers: stdSerializers,
    streams: [
      { level: 'info', stream: process.stdout },
      { level: 'error', stream: process.stderr },
    ],
  })

export const logger = (ctx: Context, next: Next): Promise<void> => {
  const logInstance = buildLogger({ name: 'node-demo-app', level: 'info' })
  ctx.log = logInstance
  return next()
}

export const requestLogger = (ctx: Context, next: Next): Promise<void> => {
  return next()
}
