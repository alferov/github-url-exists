# github-url-exists

> Check if a string is a valid and existent GitHub URL

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

ghUrlExists('https://github.com/thisisnotthepage/thisisnotthepage', function (err, isValid) {
  if (err) {
    // Handle errors
  }

  console.log(valid); // => false
});

ghUrlExists('https://google.com/', function (err, isValid) {
  if (err) {
    // Handle errors
  }

  console.log(valid); // => false
});

```

## API
### `githubUrlExists(url, cb)`
Check if a string is a valid and existent GitHub URL

#### Params
 - **String** `url`: A string to be validated
 - **Function** `cb`: The callback function

## License
MIT © [Philipp Alferov](https://github.com/alferov)
