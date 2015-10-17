'use strict';
var got = require('got');
var getGhUrl = require('get-github-url');

var isFunction = function(fn) {
  return fn && {}.toString.call(fn) === '[object Function]';
}

/**
 * githubUrlExists
 * Check if a URL is a valid and existent GitHub URL
 *
 * @name githubUrlExists
 * @function
 *
 * @param {String} url A string to be tested
 * @param {Function} cb The callback function
 *
 * @return
 */

module.exports = function githubUrlExists(url, cb) {
  if (typeof url !== 'string' || !url.length) {
    throw new TypeError('URL must be a non-empty string');
  }

  if (!isFunction(cb)) {
    throw new TypeError('Callback must be a function');
  }

  var transform = getGhUrl(url);

  if (!transform) {
    cb(null, false);
    return ;
  }

  got.head(transform, function (err) {
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
