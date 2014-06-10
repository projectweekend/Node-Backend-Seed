var async = require( 'async' );
var Validation = require( './validation' );
var Data = require( './data' );
var Output = require( './output' );
var utils = require( '../utils' );


exports.userAdminList = function ( req, res ) {

    async.waterfall( [
        function ( callback ) {
            Validation.forAdminList( req.query, callback );
        },
        function ( queryParams, callback ) {
            Data.standard.list( queryParams, callback );
        }
    ], function ( err, userList ) {
        if ( err ) {
            return utils.handleRouteError( err, res );
        }
        return res.json( userList, 200 );
    } );

};
