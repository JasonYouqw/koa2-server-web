const KoaRouter = require('koa-router');
const router = KoaRouter();
const proxy = require('../controller/proxy');
const apiList = require('../controller/getApiList')();

router.get(new RegExp('\/*'), async (ctx, next) => {
  await ctx.render('index', {
    title: 'koa2 web',
    body: 'my koa2 server web'
  });
  await next();
});

router.get('/health', (ctx, next) => {
  ctx.status = 200;
  ctx.body = 'health check ok';
  next();
});

// const { api, form, upload } = apiList;
// router.get(api, proxy.proxyGet);
// router.post(api, proxy.proxyPost);
// router.post(form, proxy.proxyForm);
// router.post(upload, proxy.proxyUpload);

module.exports = router;
