var https = require('https');

module.exports = function getHTML (option, callback) {
  var bufferVar;
  https.get(option, function(response) {
    //set encoding of the received data to UTF-8
    response.setEncoding('utf8');

    //invoke callback when there is data to read
    response.on('data', function(data) {
      bufferVar += data;
      //console.log('This is the data received', data, "\n");
    });

    //invoke callback when reaching the end of readable data
    response.on('end', function() {
      callback(bufferVar);
    });
  });
};

