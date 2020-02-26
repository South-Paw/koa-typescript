import Router from 'koa-router';
import HealthRoutes from './routes/health';

const router = new Router();

HealthRoutes.register(router);

export { router };
