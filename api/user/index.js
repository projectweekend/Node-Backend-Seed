var async = require( 'async' );
var Data = require( './data' );
var Output = require( './output' );
var handleRouteError = require( '../utils' ).handleRouteError;


exports.userAdminList = function ( req, res ) {

    async.waterfall( [
        // Perform request validation here
        function ( callback ) {

            return callback( null, req.query );

        },
        // Perform any database actions with validated data here
        function ( queryParams, callback ) {

            Data.standard.list( queryParams, callback );

        }
    ], function ( err, userList ) {
        if ( err ) {
            return handleRouteError( err, res );
        }
        return res.json( userList, 200 );
    } );

};


exports.createAdmin = function ( req, res ) {

    async.waterfall( [
        // Perform request validation here
        function ( callback ) {

            req.checkBody( 'email', "Must be an email address" ).isEmail();
            req.checkBody( 'password', "Field is required" ).notEmpty();

            var errors = req.validationErrors();

            var key = request.headers.admin_key;
            if ( typeof key === "undefined" || key !== process.env.ADMIN_KEY ) {
                // Add our own header validation error manually
                errors.push( {
                    param: "ADMIN_KEY",
                    msg: "ADMIN_KEY is not valid",
                    value: key
                } );
            }

            if ( errors ) {
                return callback( errors );
            }
            return callback( null, req.body );

        },
        // Perform any database actions with validated data here
        function ( email, password, callback ) {

            Data.createAdmin( email, password, callback );

        }
    ], function ( err, data ) {
        if ( err ) {
            return handleRouteError( err, res );
        }
        return res.json( data, 201 );
    } );

};
