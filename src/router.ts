import Router from 'koa-router';

import { register as healthRoutes } from './routes/health';

const apiRouter = new Router({ prefix: '/api' });

healthRoutes(apiRouter);

export { apiRouter };
