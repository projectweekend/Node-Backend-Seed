var async = require( 'async' );
var Validation = require( './validation' );
var Data = require( './data' );
var Output = require( './output' );
var utils = require( '../utils' );
var validationError = require( '../utils/error_messages' ).validationError;


exports.userSignup = function ( req, res ) {

    async.waterfall( [
        function ( callback ) {

            req.checkBody( 'email', "Must be an email address" ).isEmail();
            req.checkBody( 'password', "Field is required" ).notEmpty();

            var errors = req.validationErrors();
            if ( errors ) {
                return callback( errors );
            }
            return callback( null, req.body );

        },
        function ( requestBody, callback ) {

            Data.createUser( req.body.email, req.body.password, callback );

        },
        function ( newUserData, callback ) {

            Output.forSignup( newUserData, callback );

        }
    ], function ( err, outputData ) {
        if ( err ) {
            return utils.handleRouteError( err, res );
        }
        return res.json( outputData, 201 );
    } );

};
