const env = global.DEPLOY_ENV || 'dev';
const config = require(`./${env}`)
module.exports = config
