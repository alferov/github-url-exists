'use strict';
var chai = require('chai');
var ghUrlExists = require('../index.js');
var expect = chai.expect;

var validURLs = [
  'https://github.com',
  'https://github.com/alferov',
  'https://github.com/alferov/awesome-gulp',
  'https://github.com/alferov/awesome-gulp.git'
];

var invalidURLs = [
  'git@github.com:alferov/awesome-gulp.git',
  'https://github.com/thisisnotthepage/thisisnotthepage',
  'https://github.com/thisisnotthepagfdd',
  'https://google.com'
];

describe('github-url-exists', function() {

  describe('with invalid options', function(){

    it('should throw an error if passed arguments are not correct', function() {
      expect(ghUrlExists.bind(null))
        .to.throw(/must be a non-empty string/);

      expect(ghUrlExists.bind(null, '', null))
        .to.throw(/must be a non-empty string/);

      expect(ghUrlExists.bind(null, 'hello', null))
        .to.throw(/must be a function/);
    });
  });


  describe('valid URLs', function() {

    validURLs.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be valid', function(done) {
        var callback = function (err, valid) {
          expect(err).to.be.null;
          expect(valid).to.be.true;
          done();
        };

        ghUrlExists(url, callback);
      });
    });
  });

  describe('invalid URLs', function() {
    invalidURLs.forEach(function(url) {
      it('URL' + ' - ' + url + ' should be invalid', function(done) {
        var callback = function (err, valid) {
          expect(err).to.be.null;
          expect(valid).to.be.false;
          done();
        };

        ghUrlExists(url, callback);
      });
    });
  });
});
