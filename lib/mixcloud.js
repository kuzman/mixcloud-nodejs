var request = require("./request");

/*
*
*   Deal with users
*
*/
//get single user details
module.exports.getUserDetails = function(mcuser, callback) {
    request.getJson(mcuser,callback);
};
//get single user tracks
module.exports.getUserTacks = function (user_id, callback) {
            request.getJson('users/' + user_id + '/tracks', callback);
};
//Get user's metadata
module.exports.getUserMetadata = function (mcuser, callback) {
            request.getJson(mcuser + '/?metadata=1', callback);
};
//get user's track details
//exports.getUserTackDetails = function (user_id, callback) {
           //request.getJson('users/' + user_id + '/tracks', callback);
//};
/*
*
*   Deal with tracks
*
*/
//Get popular Tracks
module.exports.getPopularTracks = function(callback){
	request.getJson('popular/',callback);
};
//Get hot Tracks
module.exports.getHotTracks = function(callback){
	request.getJson('popular/hot/',callback);
};
//Get new Tracks
module.exports.getNewTracks = function(callback){
	request.getJson('new/',callback);
};
//get Track by ID
module.exports.getTrackbyID = function(id,callback) {
    request.getJson('tracks/' + id, callback);
};