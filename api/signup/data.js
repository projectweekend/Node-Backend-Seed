var bcrypt = require( 'bcrypt' );
var appModels = require( '../models' );
var systemError = require( '../utils' ).systemError;


exports.isEmailInUse = function ( email, callback ) {

    appModels.User.findOne( { email: email }, function ( err, user ) {

        if ( err ) {
            return callback( systemError( err ) );
        }

        if ( user ) {
            return callback( null, true );
        }

        return callback( null, false );

    } );

};


exports.createUser = function ( email, password, callback ) {

    var newUserData = {
        email: email,
        password: bcrypt.hashSync( password, 8 )
    };

    appModels.User.create( newUserData, function ( err, newUser ) {

        if ( err ) {
            return callback( systemError( err ) );
        }

        return callback( null, newUser );

    } );

};
