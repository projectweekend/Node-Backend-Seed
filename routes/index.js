var express = require('express');
var router = express.Router();

var UserAPI = require( '../api/user' );
var AuthenticateAPI = require( '../api/authenticate' );

/* Map URLs to handlers in this file */
router.post( '/api/signup', UserAPI.create );
router.post( '/api/authenticate', AuthenticateAPI.userLogin );

module.exports = router;
