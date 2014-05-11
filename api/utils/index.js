exports.validationError = function ( message ) {
    return {
        err: null,
        type: 'validation',
        message: message
    };
};

exports.systemError = function ( err ) {
    return {
        err: err,
        type: 'system',
        message: "A system error occurred"
    };
};


exports.handleRouteError = function ( err, res ) {
    if ( err.type === 'validation' ) {
        return res.json( err, 400 );
    }
    if ( err.type === 'system' ) {
        return res.json( err, 500 );
    }
};
