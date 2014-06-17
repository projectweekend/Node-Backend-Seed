var validator = require( 'validator' );
var DataManager = require( './data' );
var utils = require( '../utils' );
var validationError = require( '../utils' ).validationError;


exports.forAdminList = function ( data, callback ) {
    // TODO: finish this
    return callback( null, data );
};


exports.createAdmin = function ( request, callback ) {

    var adminKey = request.headers.admin_key;
    if ( typeof adminKey === "undefined" ) {
        return callback( validationError( "'admin_key' header is missing" ) );
    }

    if ( adminKey !== process.env.ADMIN_KEY ) {
        return callback( validationError( "'admin_key' is not valid" ) );
    }

    if ( !validator.isEmail( request.body.email ) ) {
        return callback( validationError( "'email' is not valid" ) );
    }

    return callback( null, request.body.email, request.body.password );

};
