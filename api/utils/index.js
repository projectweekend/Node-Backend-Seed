exports.handleRouteError = function ( err, res ) {
    if ( err.type === 'validation' ) {
        return res.json( err, 400 );
    }
    if ( err.type === 'system' ) {
        return res.json( err, 500 );
    }
    if ( err.type === 'authorization' ) {
        return res.json( err, 401 );
    }
};
