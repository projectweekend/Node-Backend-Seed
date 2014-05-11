var express = require('express');
var router = express.Router();

var UserAPI = require( '../api/user' );

/* Map URLs to handlers in this file */
router.post( '/api/signup', UserAPI.create );

module.exports = router;
