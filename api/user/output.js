var jwt = require( 'jsonwebtoken' );


var jwtSecret = process.env.JWT_SECRET;


exports.forCreate = function ( data, callback ) {
    var tokenData = {
        id: data._id
    };
    var output = {
        token: jwt.sign( tokenData, jwtSecret, { expiresInMinutes: 20160 } )
    };
    return callback( null, output );
};
