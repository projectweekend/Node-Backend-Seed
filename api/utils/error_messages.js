exports.conflictError = function ( message ) {
    return {
        err: null,
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
        err: null,
        type: 'authorization',
        msg: message
    };
};
