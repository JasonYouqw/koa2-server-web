const path = require('path');
const  webpack = require('webpack');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const webpackConfig = require('../build/webpack.dev.config');
const depolyMapper = require('./utils/deployEnvMapper');
const config = require('../config');

const koa = require('koa2');
const koaEjs = require('koa-ejs');
const koaStatic = require('koa-static');
const koaBody = require('koa-body');

const Router = require('./routes');


const app = new koa();

global.NODE_ENV = process.env.NODE_ENV;
global.DEPLOY_ENV = process.env.DEPLOY_ENV;

if (!global.DEPLOY_ENV) {
  global.DEPLOY_ENV = 'dev';
} else if (!depolyMapper[global.DEPLOY_ENV]) {
  throw new Error("environment variable DEPLOY_ENV is invalid: " + global.DEPLOY_ENV);
}

// koa body
app.use(koaBody({
    multipart: true 
}));
console.log(`${__dirname}/views`);
// ejs template
koaEjs(app, {
  root: path.join(__dirname, '/views'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false
});

// static file path
console.log(`static dir:${path.resolve(__dirname, '../public')}`)
app.use(koaStatic(path.resolve(__dirname, '../public')));

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  console.log(`middware use time: ${ms}ms`);
});

// router
app.use(Router.routes());
app.use(Router.allowedMethods());


const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const compiler = webpack(webpackConfig);
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  // hot load
  app.use(hotMiddleware(compiler, {
    reload: true
  }));
}

app.listen(
  8080,
  () => {
    console.log('app server has started on port 8080');
  }
);


