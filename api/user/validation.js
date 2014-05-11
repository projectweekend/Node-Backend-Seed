var validator = require( 'validator' );
var DataManager = require( './data' );
var validationError = require( '../utils' ).validationError;
var systemError = require( '../utils' ).systemError;


exports.forCreate = function ( data, callback ) {
    if ( !data.email || ! data.password ) {
        return callback( validationError( "Email and password are required" ) );
    }
    if ( !validator.isEmail( data.email ) ) {
        return callback( validationError( "Email address is invalid" ) );
    }
    DataManager.standard.list( { email: data.email }, function ( err, results ) {
        if ( err ) {
            return callback( systemError( err ) );
        }
        if ( results.length > 0 ) {
            return callback( validationError( "Email is already in use" ) );
        }
        return callback( null, data );
    } );
};
