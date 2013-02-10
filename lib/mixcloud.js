var request = require("./request");

/*
*
*   Deal with users
*
*/
//get single user details
module.exports.getUserDetails = function(scuser, callback) {
    request.getJson('users/' + scuser,callback);
};
//get single user tracks
module.exports.getUserTacks = function (user_id, callback) {
            request.getJson('users/' + user_id + '/tracks', callback);
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
//Get all tracks
module.exports.getAllLatestTracks = function(callback) {
    request.getJson('tracks',callback);
};
//get Track by ID
module.exports.getTrackbyID = function(id,callback) {
    request.getJson('tracks/' + id, callback);
};