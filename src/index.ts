import Fastify from 'fastify';
import helmet from '@fastify/helmet';
import cookie from '@fastify/cookie';
import rateLimit from '@fastify/rate-limit';
import cors from '@fastify/cors';


const server = Fastify({
  logger: true
});

server.register(cookie, {
  secret: 'secret',
});

server.register(helmet, { global: true });

server.register(cors, { /* OPTIONS here */ });

server.register(rateLimit, {
  global : false, // default true
  max: 3, // default 1000
  ban: 2, // default -1
  timeWindow: 5000, // default 1000 * 60
  hook: 'preHandler', // default 'onRequest'
  cache: 10000, // default 5000
  allowList: ['127.0.0.1'], // default []
  redis: null, //new Redis({ host: '127.0.0.1' }), // default null
  nameSpace: 'test-ratelimit-', // default is 'fastify-rate-limit-'
  continueExceeding: true, // default false
  skipOnError: true, // default false
  keyGenerator: (request) => request.ip, // default
  //errorResponseBuilder: function (request, context) { /* ... */},
  enableDraftSpec: true, // default false. Uses IEFT draft header standard
  addHeadersOnExceeding: { // default show all the response headers when rate limit is not reached
    'x-ratelimit-limit': true,
    'x-ratelimit-remaining': true,
    'x-ratelimit-reset': true
  },
  addHeaders: { // default show all the response headers when rate limit is reached
    'x-ratelimit-limit': true,
    'x-ratelimit-remaining': true,
    'x-ratelimit-reset': true,
    'retry-after': true
  }
});

server.setErrorHandler((error, _, reply) => {
  if (error.statusCode === 429) {
    reply.code(429);
    error.message = 'You hit the rate limit! Slow down please!';
  }

  reply.send(error);
});

server.get('/', async (_, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});


server.listen({ port: 3000 }, err  => {
  if (err) {
    throw err;
  }
  console.log('Example app listening on port 3000!');
});