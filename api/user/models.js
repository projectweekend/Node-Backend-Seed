var bcrypt = require( 'bcrypt' );
var mongoose = require( 'mongoose' );
var systemError = require( '../utils/error_messages' ).systemError;
var authorizationError = require( '../utils/error_messages' ).authorizationError;
var conflictError = require( '../utils/error_messages' ).conflictError;

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var UserSchema = Schema ( {
    id: ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: String,
    role: String
} );


UserSchema.statics.add = function ( email, password, role, callback ) {

    var newUserData = {
        email: email,
        password: bcrypt.hashSync( password, 8 ),
        role: role
    };

    this.create( newUserData, function ( err, newUser ) {

        if ( err && err.code === 11000 ) {
            return callback( conflictError( "Email address is in use" ) );
        }

        if ( err ) {
            return callback( systemError() );
        }

        delete newUser.password;
        return callback( null, newUser );

    } );

};


UserSchema.statics.authenticate = function ( email, password, callback ) {

    this.findOne( { email: email }, function ( err, user ) {

        if ( err ) {
            return callback( systemError() );
        }

        if ( !user ) {
            return callback( authorizationError( "Credentials are invalid" ) );
        }

        bcrypt.compare( password, user.password, function ( err, result ) {

            if ( err ) {
                return callback( systemError() );
            }

            if ( !result ) {
                return callback( authorizationError( "Invalid credentials" ) );
            }

            delete user.password;
            return callback( null, user );

        } );


    } );

};


exports.User = mongoose.model( 'User', UserSchema );
