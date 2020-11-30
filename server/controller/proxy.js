const axios = require('axios');
const config = require('../config');
const qs = require('qs');
const proxyApiMapper = config.proxyApiMapper;
const getApiList = require('./getApiList');


const proxyGet = async (ctx, next) => {
  const req = ctx.request;
  const realAddr = getProxyToAddr(req.url);
  const query = req.query;
  const requestStartTime = new Date();
  console.log(`Proxy ${req.method}:${realAddr}`);
  console.log(`query params:` + JSON.stringify(query));
  console.log(`${realAddr} start time: ${requestStartTime}`);
  console.log(`cookies:${req.get('Cookie')}`);
  await axios({
    url: realAddr,
    method: 'GET',
    params: query,
    header: {
      ...req.header,
      'Cookie': req.get('Cookie')
    }
  }).then(res => {
    ctx.body = res;
  }).catch(err => {
    ctx.body = err;
  });
  const requestEndTime = new Date().getTime();
  console.log(`request time: ${requestEndTime - requestStartTime}ms`);
  next();
}

const proxyPost = async (ctx, next) => {
  const req = ctx.request;
  const realAddr = getProxyToAddr(req.url);
  console.log('req:', req)
  const data = req.body;
  const requestStartTime = new Date().getTime();
  console.log(`Proxy ${req.method}:${realAddr}`);
  console.log(`post params:` + JSON.stringify(data));
  console.log(`${realAddr} start time: ${requestStartTime}`);
  console.log(`cookies:${req.get('Cookie')}`);
  const contentType = req.get('content-type');
  if (!contentType) {
    req.header['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  console.log(`content-type:${req.get('content-type')}`)
  await axios({
    url: realAddr,
    method: 'POST',
    data,
    headers: {
      ...req.header,
      'Cookie': req.get('Cookie'),
    }
  }).then(res => {
    ctx.body = res;
  }).catch(err => {
    ctx.body = err;
  });
  const requestEndTime = new Date().getTime();
  console.log(`request time: ${requestEndTime - requestStartTime}ms`);
  next();
}

const proxyForm = async (ctx, next) => {
  const req = ctx.request;
  const realAddr = getProxyToAddr(req.url);
  console.log('req:', req)
  const data = req.body;
  const requestStartTime = new Date().getTime();
  console.log(`Proxy ${req.method}:${realAddr}`);
  console.log(`post params:` + JSON.stringify(data));
  console.log(`${realAddr} start time: ${requestStartTime}`);
  console.log(`cookies:${req.get('Cookie')}`);
  const contentType = req.get('content-type');
  if (!contentType) {
    req.header['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  console.log(`content-type:${req.get('content-type')}`)
  await axios({
    url: realAddr,
    method: 'POST',
    data: qs.stringify(data),
    headers: {
      ...req.header,
      'Cookie': req.get('Cookie'),
    }
  }).then(res => {
    ctx.body = res;
  }).catch(err => {
    ctx.body = err;
  });
  const requestEndTime = new Date().getTime();
  console.log(`request time: ${requestEndTime - requestStartTime}ms`);
  next();
}

const proxyUpload = async (ctx, next) => {
  const req = ctx.request;
  const realAddr = getProxyToAddr(req.url);
  console.log('req:', req)
  const data = req.body;
  const requestStartTime = new Date().getTime();
  console.log(`Proxy ${req.method}:${realAddr}`);
  console.log(`post params:` + JSON.stringify(data));
  console.log(`${realAddr} start time: ${requestStartTime}`);
  console.log(`cookies:${req.get('Cookie')}`);
  const contentType = req.get('content-type');
  if (!contentType) {
    req.header['Content-Type'] = 'multipart/form-data';
  }
  console.log(`content-type:${req.get('content-type')}`)
  await axios({
    url: realAddr,
    method: 'POST',
    data,
    headers: {
      ...req.header,
      'Cookie': req.get('Cookie'),
    }
  }).then(res => {
    ctx.body = res;
  }).catch(err => {
    ctx.body = err;
  });
  const requestEndTime = new Date().getTime();
  console.log(`request time: ${requestEndTime - requestStartTime}ms`);
  next();
}

const getRemoteHost = (key) => {
  return proxyApiMapper[key];
}

const getProxyToAddr = (addr) => {
  let proxyToAddr = addr;
  const { api, form, upload } = getApiList();
  const apiList = [ api, form, upload ];
  apiList.some((reg) => {
    const matched = addr.match(reg);
    if (matched && matched[0]) {
      proxyToAddr = `${getRemoteHost(matched[1])}${addr.substring(matched[0].length - 1)}`;
      return true;
    }
  });
  return proxyToAddr
}

module.exports = {
  proxyGet,
  proxyPost,
  proxyForm,
  proxyUpload
};