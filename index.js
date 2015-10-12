'use strict';
var got = require('got');

/**
 * isValidGithubUrl
 * Check if passed link is a valid GitHub URL (doesn't return an error)
 *
 * @name isValidGithubUrl
 * @function
 * @return
 */

var isFunction = function(fn) {
  return fn && {}.toString.call(fn) === '[object Function]';
}

module.exports = function (url, cb) {
  if (typeof url !== 'string' || !url.length) {
    throw new TypeError('URL must be a non-empty string');
  }

  if (!isFunction(cb)) {
    throw new TypeError('Callback must be a function');
  }

  got.head(url, function (err) {
    if (err && err.statusCode === 404 ) {
      cb(null, false);
      return ;
    }

    if (err) {
      cb(err);
      return ;
    }

    cb(null, true);
  });
};
