exports.handleRouteError = function ( err, res ) {

    return res.json( err, err.code );

};
