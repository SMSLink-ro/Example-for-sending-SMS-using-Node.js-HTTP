var http = require("https");

var options = {
	"method": "GET",
	"hostname": "secure.smslink.ro",
	"port": null,
	"path": "/sms/gateway/communicate/index.php?to=07xyzzzzzz&message=MyMessage&connection_id=MyConnectionID&password=MyConnectionPassword",
	"headers": {
		"useQueryString": true
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();