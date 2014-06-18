var validator = require( 'validator' );
var validationError = require( '../utils/error_messages' ).validationError;


exports.forAuthenticate = function ( requestBody, callback ) {

    if ( !requestBody.email || !requestBody.password ) {
        return callback( validationError( "Email and password are required" ) );
    }

    if ( requestBody.email && !validator.isEmail( requestBody.email ) ) {
        return callback( validationError( "Email is not valid" ) );
    }

    return callback( null, requestBody );

};
