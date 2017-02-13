var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var str = ((html.split("<pre>")[1]).split("</pre>")[0]).split('').reverse().join('');
  console.log(str);
}

getHTML(requestOptions, printReverse);
