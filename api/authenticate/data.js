var bcrypt = require('bcrypt');
var appModels = require( '../models' );
var systemError = require( '../utils' ).systemError;
var authorizationError = require( '../utils' ).authorizationError;


exports.verifyCredentials = function ( email, password, callback ) {

    appModels.User.findOne( { email: email }, function ( err, user ) {

        if ( err ) {
            return callback( systemError( err ) );
        }

        if ( !user ) {
            return callback( authorizationError( "Invalid credentials" ) );
        }

        bcrypt.compare( password, user.password, function ( err, result ) {

            if ( err ) {
                return callback( systemError( err ) );
            }

            if ( !result ) {
                return callback( authorizationError( "Invalid credentials" ) );
            }

            return callback( null, user );

        } );

    } );

};
