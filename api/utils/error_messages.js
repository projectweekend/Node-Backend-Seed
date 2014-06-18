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


exports.authorizationError = function ( message ) {
    return {
        err: null,
        type: 'authorization',
        message: message
    };
};
