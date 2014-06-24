exports.handleRouteError = function ( err, res ) {

    var code = 400;
    if ( err.type === 'authorization' ) {
        code = 401;
    }

    if ( err.type === 'conflict' ) {
        code = 409;
    }

    if ( err.type === 'system' ) {
        code = 500;
    }
    delete err.type;

    return res.json( err, code );

};
