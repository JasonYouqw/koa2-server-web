const deployKeys = ['dev','test','pre','prd'];

function keyMapper(keys){
  const map = {};
  keys.forEach(key => map[key] = key);
  return map;
}

module.exports = keyMapper(deployKeys);
