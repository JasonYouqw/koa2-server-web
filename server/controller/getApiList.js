const config = require('../config');
const proxyApiMapper = config.proxyApiMapper;

const compileReg = (str) => {
  return new RegExp("^/(" + str + ")/.*?");
}

const getApiList = () => {
  const apiList = compileReg('api/claim')
  console.log(apiList);
  const formApiList = compileReg('api/form');
  console.log(formApiList);
  const uploadApiList = compileReg('api/upload');
  console.log(uploadApiList);
  return {
    api: apiList,
    form: formApiList,
    upload: uploadApiList
  };
};

module.exports = getApiList;