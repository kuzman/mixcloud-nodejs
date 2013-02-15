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
    mixcloud.getUserDetails("spartacus",function(data) {
    	//console.log("User details: " + util.inspect(data));
    	//res.send(util.inspect(data));
    });
   // mixcloud.getUserTacks("guscalderone",function(data){
    	//console.log(data);
    	//res.send(util.inspect(data));
   // });
    mixcloud.getNewTracks(function(data){
    	//console.log("New Tracks: " + JSON.stringify(data));
    	//res.send(util.inspect(data));
    });
   mixcloud.getUserMetadata("spartacus", function(data){
    	console.log("Metadata: " + JSON.stringify(data));
    	//res.send(util.inspect(data));
   });
});
app.listen(port,host);
util.log('started app');