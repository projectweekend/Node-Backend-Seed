var jwt = require( 'jsonwebtoken' );


var jwtSecret = process.env.JWT_SECRET;
var jwtExpires = process.env.JWT_EXPIRES;


exports.forSignup = function ( user, callback ) {

    var token = {
        id: user._id
    };

    var output = {
        token: jwt.sign( token, jwtSecret, { expiresInMinutes: jwtExpires } )
    };

    return callback( null, output );

};
