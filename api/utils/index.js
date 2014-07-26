exports.handleRouteError = function ( err, res ) {

    if ( err.type === "custom" && err.code === 400 ) {
        return res.json( err.messages, err.code );
    }

    if ( err.type === "custom" ) {
        return res.json( err, err.code );
    }

    return res.json( err, 500 );

};
