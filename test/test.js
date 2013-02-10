var util=require('util'),
    mixcloud=require('../lib/mixcloud'),
    express=require('express');

var host = "localhost"
	, port = "3000";

var app = express();


/**
 * Server starting
 */
app.get('/', function(req, res){
    mixcloud.getUserDetails("guscalderone",function(data) {
    	//console.log(data);
    	//res.send(util.inspect(data));
    });
    mixcloud.getUserTacks("guscalderone",function(data){
    	//console.log(data);
    	//res.send(util.inspect(data));
    });
    mixcloud.getAllLatestTracks(function(data){
    	//console.log(data);
    	//res.send(util.inspect(data));
    });
    mixcloud.getTrackbyID("78640458", function(data){
    	console.log(data);
    	res.send(util.inspect(data));
    });
});
app.listen(port,host);
util.log('started app');