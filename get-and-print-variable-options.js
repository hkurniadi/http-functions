var https = require('https');

function getAndPrintHTMLChunks (option) {

  var bufferVar;
  https.get(option, function(response) {
    //set encoding of the received data to UTF-8
    response.setEncoding('utf8');

    //invoke callback when there is data to read
    response.on('data', function(data) {
      bufferVar += data;
      //console.log('This is the data received', data, "\n");
    });

    //invoke error callback when there is error
    response.on('error', function(err) {
      console.log(err.stack);
    });

    //invoke callback when reaching the end of readable data
    response.on('end', function() {
      console.log('Received data stored in a buffer variable: ', bufferVar, '\n');
      console.log('Response stream is complete');
    });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTMLChunks(requestOptions);