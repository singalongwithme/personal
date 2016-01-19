var http 	= require('http'),
	express = require('express'),
	app 	= express();

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/app/views/index.html');
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use('/app', express.static(__dirname + '/app'));

// var server = http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end();
// });

var port = Number(process.env.PORT || 3000);

app.listen(port, function () {
	console.log('Listening on port ' + port);
});