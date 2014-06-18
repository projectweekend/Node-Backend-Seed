var jwt = require( 'jsonwebtoken' );


var jwtSecret = process.env.JWT_SECRET;
var jwtExpires = process.env.JWT_EXPIRES;


exports.makeToken = function ( user ) {

    var token = {
        id: user._id,
        email: user.email,
        role: user.role
    };

    return jwt.sign( token, jwtSecret, { expiresInMinutes: jwtExpires } );

};
