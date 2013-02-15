var fs = require('fs')
	, config = require("../config/config")
	, jsonraver = require("jsonraver")
	, qs = require('querystring');

var parameters = config.getConfig();
var client_id = parameters[0];
var host = parameters[1];

module.exports.getJson = function(resource,params,callback){
		if (typeof params === 'function') {
            callback = params;
            params = {};
        }
        params.client_id = client_id;
		jsonraver(host + resource, function(err, data) {
		    if(err) {
		        console.log("Geee error");
		        console.log("URL: ", host + resource);
		    } else {		    	
		        callback(data);
		    }               
		});
	};