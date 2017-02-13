var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
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
    response.on('end', function() {
      console.log('Response stream is complete');
    });
  });
}

getAndPrintHTMLChunks();