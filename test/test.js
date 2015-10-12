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

  it('should return true if url is valid', function (done) {
    isValidURL('https://github.com/alferov/awesome-gulp', function (err, valid) {
      expect(err).to.be.null;
      expect(valid).to.be.true;
      done();
    });
  });

  it('should return false if url is not valid', function (done) {
    isValidURL('https://github.com/thisisnotthepage/thisisnotthepage', function (err, isValid) {
      expect(err).to.be.null;
      expect(isValid).to.be.false;
      done();
    });
  });
});
