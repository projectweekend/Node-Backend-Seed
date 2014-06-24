exports.handleRouteError = function ( err, res ) {

    if ( err.type === 'authorization' ) {
        return res.json( err, 401 );
    }

    if ( err.type === 'conflict' ) {
        return res.json( err, 409 );
    }

    if ( err.type === 'system' ) {
        return res.json( err, 500 );
    }

    return res.json( err, 400 );

};
