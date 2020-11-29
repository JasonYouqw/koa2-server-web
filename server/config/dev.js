module.exports = {
  proxyApiMapper: {
    'api/claim': 'http://koa-server/web',
    'api/form': 'http://koa-server/web',
    'api/upload': 'http://koa-server/web',
  },
  sessionKey: 'loginSessionKey',
  env: global.DEPLOY_ENV
};