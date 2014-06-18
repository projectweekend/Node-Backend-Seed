var makeToken = require( '../utils/authentication' ).makeToken;


exports.buildResponse = function ( user, callback ) {

    var output = {
        token: makeToken( user )
    };

    return callback( null, output );

};
