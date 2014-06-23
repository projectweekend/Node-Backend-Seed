var async = require( 'async' );
var Data = require( './data' );
var Output = require( './output' );
var handleRouteError = require( '../utils' ).handleRouteError;


exports.userLogin = function ( req, res ) {

    async.waterfall( [
        // Perform request validation here
        function ( callback ) {

            req.checkBody( 'email', "Must be an email address" ).isEmail();
            req.checkBody( 'password', "Field is required" ).notEmpty();

            var errors = req.validationErrors();
            if ( errors ) {
                return callback( errors );
            }
            return callback( null, req.body );

        },
        // Perform any database actions with validated data here
        function ( requestBody, callback ) {

            Data.verifyCredentials( requestBody.email, requestBody.password, callback );

        },
        // Perform any final manipulation of data before sending to response
        function ( userData, callback ) {

            Output.makeToken( userData, callback );

        }
    ],
    function ( err, output ) {
        if ( err ) {
            return handleRouteError( err, res );
        }
        return res.json( output, 200 );
    } );

};
