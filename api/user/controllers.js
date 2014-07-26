var async = require( 'async' );
var User = require( './models' ).User;
var handleRouteError = require( '../utils' ).handleRouteError;
var validationError = require( '../utils/error_messages' ).validationError;
var makeToken = require( '../utils/authentication' ).makeToken;


exports.signup = function ( req, res ) {

    var validation = function ( callback ) {

        req.checkBody( 'email', "Must be an email address" ).isEmail();
        req.checkBody( 'password', "Field is required" ).notEmpty();

        var errors = req.validationErrors();
        if ( errors ) {
            return callback( validationError( errors ) );
        }

        return callback( null, {
            email: req.param( "email" ),
            password: req.param( "password" )
        } );

    };

    var data = function ( cleanData, callback ) {

        User.add( cleanData.email, cleanData.password, "regular", callback );

    };

    async.waterfall( [ validation, data ], function ( err, newUser ) {

        if ( err ) {
            return handleRouteError( err, res );
        }

        return res.json( newUser, 201 );

    } );

};


exports.createAdmin = function ( req, res ) {

    var validation = function ( callback ) {

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
            return callback( validationError( errors ) );
        }

        return callback( null, {
            email: req.param( "email" ),
            password: req.param( "password" )
        } );

    };

    var data = function ( cleanData, callback ) {

        User.add( cleanData.email, cleanData.password, "admin", callback );

    };

    async.waterfall( [ validation, data ], function ( err, dataForResponse ) {

        if ( err ) {
            return handleRouteError( err, res );
        }

        return res.json( dataForResponse, 201 );

    } );

};


exports.authenticate = function ( req, res ) {

    var validation = function ( callback ) {

        req.checkBody( 'email', "Must be an email address" ).isEmail();
        req.checkBody( 'password', "Field is required" ).notEmpty();

        var errors = req.validationErrors();
        if ( errors ) {
            return callback( validationError( errors ) );
        }

        return callback( null, {
            email: req.param( "email" ),
            password: req.param( "password" )
        } );

    };

    var data = function ( cleanData, callback ) {

        User.authenticate( cleanData.email, cleanData.password, callback );

    };

    var makeTokenResponse = function ( user, callback ) {

        var tokenResponse = {
            token: makeToken( user )
        };

        return callback( null, tokenResponse );

    };

    var tasks = [ validation, data, makeTokenResponse ];

    async.waterfall( tasks, function ( err, tokenResponse ) {

        if ( err ) {
            return handleRouteError( err, res );
        }

        return res.json( tokenResponse, 200 );

    } );

};
