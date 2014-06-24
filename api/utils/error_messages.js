exports.conflictError = function ( message ) {
    return {
        type: 'conflict',
        msg: message
    };
};


exports.systemError = function ( err ) {
    return {
        err: err,
        type: 'system',
        msg: "A system error occurred"
    };
};


exports.authorizationError = function ( message ) {
    return {
        type: 'authorization',
        msg: message
    };
};
