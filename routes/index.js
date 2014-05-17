var express = require('express');
var router = express.Router();

var SignupAPI = require( '../api/signup' );
var AuthenticateAPI = require( '../api/authenticate' );


/* Map URLs to handlers in this file */
router.post( '/api/signup', SignupAPI.userSignup );
router.post( '/api/authenticate', AuthenticateAPI.userLogin );


module.exports = router;
