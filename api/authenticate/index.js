var async = require( 'async' );
var Validation = require( './validation' );
var Data = require( './data' );
var Output = require( './output' );
var utils = require( '../utils' );


exports.userLogin = function ( req, res ) {

    async.waterfall( [
        function ( callback ) {
            Validation.forAuthenticate( req.body, callback );
        },
        function ( validatedRequest, callback ) {
            Data.verifyCredentials( req.body.email, req.body.password, callback );
        },
        function ( userData, callback ) {
            Output.makeToken( userData, callback );
        }
    ],
    function ( err, output ) {
        if ( err ) {
            return utils.handleRouteError( err, res );
        }
        return res.json( output, 200 );
    } );

};
