/* eslint-disable no-console */

import http from 'http';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import { config } from './config';
import { apiRouter } from './router';

const app = new Koa();

app.use(bodyParser(config.bodyParser));

app.use(cors(config.cors));

app.use(apiRouter.routes());

const httpServer = http.createServer(app.callback());

const { env, name, version, host, port } = config;

httpServer.listen({ host, port }, () => {
  console.info(`${name}@${version} server listening on ${host}:${port}, in ${env}`);
});
