var bcrypt = require( 'bcrypt' );
var appModels = require( '../models' );
var MongooseDataManager = require( '../utils/data_manager' ).MongooseDataManager;
var systemError = require( '../utils' ).systemError;


exports.standard = MongooseDataManager( appModels.User );


exports.createAdmin = function ( email, password, callback ) {

    var newUserData = {
        email: email,
        password: bcrypt.hashSync( password, 8 ),
        role: "admin"
    };

    appModels.User.create( newUserData, function ( err, newUser ) {

        if ( err ) {
            return callback( systemError( err ) );
        }

        return callback( null, {} );

    } );

};
