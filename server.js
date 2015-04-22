(function () {
	"use strict";
	
	var express = require("express"),
			http = require("http"),
			app = express();

	app.use(express.static(__dirname));
	http.createServer(app).listen(5000);
    
    console.log("server.js really is working!");
	console.log("Server running on port 3000");
}());