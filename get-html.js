var https = require('https');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getAndPrintHTMLChunks (option, callback) {

  https.get(option, function(response) {
    //set encoding of the received data to UTF-8
    response.setEncoding('utf8');

    //invoke callback when there is data to read
    response.on('data', function(data) {
      console.log('This is the data received', data, "\n");
    });

    //invoke error callback when there is error
    response.on('error', function(err) {
      console.log(err.stack);
    });

    //invoke callback when reaching the end of readable data
    response.on('end', callback());
  });
}

getAndPrintHTMLChunks(requestOptions, printHTML);