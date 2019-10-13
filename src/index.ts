import http from 'http';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import { appConfig, bodyParserConfig, corsConfig } from './config';
import { router } from './router';

const app = new Koa();

// Apply Middleware
app.use(bodyParser(bodyParserConfig));
app.use(cors(corsConfig));

// Apply routes
app.use(router.routes());

const httpServer = http.createServer(app.callback());

const { env, name, version, host, port } = appConfig;

httpServer.listen({ host, port }, () => {
  // eslint-disable-next-line no-console
  console.info(`${name}@${version} server listening on ${host}:${port}, in ${env}`);
});
