const camelCase = require('camelcase');


module.exports = function (prefix) {
  const normalizedPrefix = prefix.toUpperCase().replace(/-/g, '_') + '__';
  const keys = Object.keys(process.env).filter(key => key.startsWith(normalizedPrefix));
  const result = {};
  for (let key of keys) {
    const jsKey = camelCase(key.replace(normalizedPrefix, '').toLowerCase());
    result[jsKey] = process.env[key];
  }
  return result;
};

