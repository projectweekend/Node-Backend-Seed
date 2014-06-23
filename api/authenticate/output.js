var makeToken = require( '../utils/authentication' ).makeToken;


exports.makeToken = function ( user, callback ) {

    var output = {
        token: makeToken( user )
    };

    return callback( null, output );

};
