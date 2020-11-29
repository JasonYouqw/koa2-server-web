const axios = require('axios');
const config = require('../config');
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
  await axios({
    url: realAddr,
    method: 'GET',
    params: query,
    header: req.header
  }).then(res => {
    ctx.body = res;
  }).catch(err => {
    ctx.body = err;
  });
  next();
}

const proxyPost = async (ctx, next) => {
  const req = ctx.request;
  const realAddr = getProxyToAddr(req.url);
  const query = req.query;
  const requestStartTime = new Date();
  console.log(`Proxy ${req.method}:${realAddr}`);
  console.log(`query params:` + JSON.stringify(query));
  console.log(`${realAddr} start time: ${requestStartTime}`);
  await axios({
    url: realAddr,
    method: 'POST',
    params: query,
    header: req.header
  }).then(res => {
    ctx.body = res;
  }).catch(err => {
    ctx.body = err;
  });
  next();
}

const proxyForm = (ctx, next) => {

}

const proxyUpload = (ctx, next) => {

}

const getRemoteHost = (key) => {
  return proxyApiMapper[key];
}

const getProxyToAddr = () => {
  let proxyToAddr = addr;
  const apiList = [...getApiList()];
  apiList.some((reg) => {
    const matched = addr.match(reg);
    if (matched && matched[0]) {
      proxyToAddr = getRemoteHost(`${matched[1]}${addr.substring(matched[0].length - 1)}`);
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