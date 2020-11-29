const config = require('../config');
const proxyApiMapper = config.proxyApiMapper;

const compileReg = (str) => {
  return new RegExp("^/(" + str + ")/.*?");
}

const getApiList = () => {
  const apiList = compileReg(proxyApiMapper['api/claim'])
  console.log(apiList);
  const formApiList = compileReg(proxyApiMapper['api/form']);
  console.log(formApiList);
  const uploadApiList = compileReg(proxyApiMapper['api/upload']);
  console.log(uploadApiList);
  return {
    api: apiList,
    from: formApiList,
    upload: uploadApiList
  };
};

module.exports = getApiList;