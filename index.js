'use strict';

/**
 * isValidGithubUrl
 *
 * @name isValidGithubUrl
 * @function
 * @return
 */

var isFunction = function(fn) {
  return fn && {}.toString.call(fn) === '[object Function]';
}

module.exports = function (url, cb) {
  if (!(typeof url === 'string' && url.length !== 0)) {
    throw new TypeError('URL should be a string');
  }

  if (!(isFunction(cb))) {
    throw new TypeError('Callback should be a function');
  }

};
