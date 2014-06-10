var express = require('express');
var router = express.Router();

var SignupAPI = require( '../api/signup' );
var AuthenticateAPI = require( '../api/authenticate' );
var UserAPI = require( '../api/user' );


var restrictByUserRole = function ( allowedLevels ) {
    return function ( req, res, next ) {
        if ( allowedLevels.indexOf( req.user.role ) > -1 ) {
            next();
        } else {
            return res.json( {
                message: "You are not authorized"
            }, 403 );
        }
    };
};


/* Map URLs to handlers in this file */
router.post( '/api/signup', SignupAPI.userSignup );
router.post( '/api/authenticate', AuthenticateAPI.userLogin );

router.get( '/admin/user', UserAPI.userAdminList );


module.exports = router;
