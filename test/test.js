'use strict';
var chai = require('chai');
var isValidURL = require('../index.js');
var expect = chai.expect;

describe('is-valid-github-url', function() {
  it('should throw an error if passed arguments are not correct', function() {
    expect(isValidURL.bind(null))
      .to.throw(/should be a string/);

    expect(isValidURL.bind(null, 'hello', null))
      .to.throw(/should be a function/);
  });

});
