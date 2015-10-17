'use strict';
var chai = require('chai');
var ghUrlExists = require('../index.js');
var expect = chai.expect;

describe('github-url-exists', function() {
  it('should throw an error if passed arguments are not correct', function() {
    expect(ghUrlExists.bind(null))
      .to.throw(/must be a non-empty string/);

    expect(ghUrlExists.bind(null, '', null))
      .to.throw(/must be a non-empty string/);

    expect(ghUrlExists.bind(null, 'hello', null))
      .to.throw(/must be a function/);
  });

  it('should return true if url is valid', function (done) {
    ghUrlExists('https://github.com/alferov/awesome-gulp', function (err, valid) {
      expect(err).to.be.null;
      expect(valid).to.be.true;
      done();
    });
  });

  it('should return false if url is not valid', function (done) {
    ghUrlExists('https://github.com/thisisnotthepage/thisisnotthepage', function (err, isValid) {
      expect(err).to.be.null;
      expect(isValid).to.be.false;
      done();
    });
  });

  it('should return false if url is not valid', function (done) {
    ghUrlExists('https://github.com/thisisnotthepage/thisisnotthepage', function (err, isValid) {
      expect(err).to.be.null;
      expect(isValid).to.be.false;
      done();
    });
  });

  it('should return false if url does not belong to github domain', function (done) {
    ghUrlExists('amazon.ca', function (err, isValid) {
      expect(err).to.be.null;
      expect(isValid).to.be.false;
      done();
    });
  });
});
