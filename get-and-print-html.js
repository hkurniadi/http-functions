var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  //var bufferArr = [];
  var bufferVar;
  https.get(requestOptions, function(response) {
    //set encoding of the received data to UTF-8
    response.setEncoding('utf8');

    //invoke callback when there is data to read
    response.on('data', function(data) {
      //bufferArr.push(data);
      bufferVar += data;
      //console.log('This is the data received', data, "\n");
    });

    //invoke error callback when there is error
    response.on('error', function(err) {
      console.log(err.stack);
    });

    //invoke callback when reaching the end of readable data
    response.on('end', function() {
      //console.log('Received data stored in a buffer array: ', bufferArr, '\n');
      //console.log('Received data stored in a buffer array at index 0: ', bufferArr[0]);
      console.log('Received data stored in a buffer variable: ', bufferVar, '\n');
      console.log('Response stream is complete');
    });
  });
}

getAndPrintHTML();