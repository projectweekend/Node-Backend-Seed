var validator = require( 'validator' );
var Data = require( './data' );
var validationError = require( '../utils/error_messages' ).validationError;


exports.forSignup = function ( requestBody, callback ) {

    if ( !requestBody.email || !requestBody.password ) {
        return callback( validationError( "Email and password are required" ) );
    }

    if ( !validator.isEmail( requestBody.email ) ) {
        return callback( validationError( "Email is not valid" ) );
    }

    Data.isEmailInUse( requestBody.email, function ( err, inUse ) {

        if ( err ) {
            // system errors are returned by isEmailInUse...
            return callback( err );
        }

        if ( inUse ) {
            return callback( validationError( "Email is already in use" ) );
        }

        return callback( null, requestBody );

    });

};
