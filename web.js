// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var PWD = process.cwd();

app.use(logfmt.requestLogger());

app.use(express.static(PWD + '/'));
/* app.get('/', function(req, res) {
  res.send('Hello World! Testing devops...');
});
*/
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
