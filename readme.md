# github-url-exists [![Build Status](https://travis-ci.org/alferov/github-url-exists.svg?branch=master)](https://travis-ci.org/alferov/github-url-exists)

> Check if a URL is a valid and existent GitHub URL

## Installation
```
$ npm install --save github-url-exists
```

## Usage
```js
var githubUrlExists = require('github-url-exists');

ghUrlExists('https://github.com/alferov/awesome-gulp', function (err, valid) {
  if (err) {
    // Handle errors
  }

  console.log(valid); // => true
});

ghUrlExists('https://github.com/notthepage/notthepage', function (err, valid) {
  if (err) {
    // Handle errors
  }

  console.log(valid); // => false
});

ghUrlExists('google.com/', function (err, valid) {
  if (err) {
    // Handle errors
  }

  console.log(valid); // => false
});

```

## API
### `githubUrlExists(url, cb)`
Check if a URL is a valid and existent GitHub URL

#### Params
 - **String** `url`: A string to be validated
 - **Function** `cb`: The callback function

## License
MIT © [Philipp Alferov](https://github.com/alferov)
