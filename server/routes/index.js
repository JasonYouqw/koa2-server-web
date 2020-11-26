const KoaRouter = require('koa-router');

const router = KoaRouter();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'koa2 web',
    body: 'my koa2 server web'
  });
  // ctx.body = 'my koa2 server web body';
  next();
});


module.exports = router;
