import Router from 'koa-router';

export const register = (router: Router) => {
  router.get('/health', async ctx => {
    ctx.status = 200;
    ctx.body = { status: 'OK' };
  });
};
