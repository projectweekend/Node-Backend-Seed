var async = require( 'async' );
var Validation = require( './validation' );
var Data = require( './data' );
var Output = require( './output' );
var utils = require( '../utils' );


exports.userSignup = function ( req, res ) {

    async.waterfall( [
        function ( callback ) {
            Validation.forSignup( req.body, callback );
        },
        function ( validatedReqBody, callback ) {
            Data.createUser( req.body.email, req.body.password, callback );
        }
    ], function ( err, outputData ) {
        if ( err ) {
            return utils.handleRouteError( err, res );
        }
        return res.json( outputData, 201 );
    } );

};
