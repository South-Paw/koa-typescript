import Router from 'koa-router';

const register = (router: Router) => {
  router.get('/health', async ctx => {
    ctx.status = 200;
    ctx.body = { status: 'OK' };
  });
};

export default { register };
