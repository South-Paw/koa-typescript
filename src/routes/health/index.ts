import Router from 'koa-router';

const register = (router: Router) => {
  router.post('/health', async ctx => {
    ctx.status = 200;
    ctx.body = { status: 'OK' };
  });
};

export default { register };
