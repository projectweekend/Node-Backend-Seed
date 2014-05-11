var async = require( 'async' );
var ValidationManager = require( './validation' );
var DataManager = require( './data' );
var OutputManager = require( './output' );
var utils = require( '../utils' );


exports.create = function ( req, res ) {

    async.waterfall( [
        function ( callback ) {
            ValidationManager.forCreate( req.body, callback );
        },
        function ( validatedReqBody, callback ) {
            DataManager.standard.create( validatedReqBody, callback );
        },
        function ( newUser, callback ) {
            OutputManager.forCreate( newUser, callback );
        }
    ], function ( err, outputData ) {
        if ( err ) {
            return utils.handleRouteError( err, res );
        }
        return res.json( outputData, 201 );
    } );

};
