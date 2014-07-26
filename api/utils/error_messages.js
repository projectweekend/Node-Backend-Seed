exports.conflictError = function ( message ) {
    return {
        msg: message,
        code: 409
    };
};


exports.systemError = function () {
    return {
        msg: "A system error occurred",
        code: 500
    };
};


exports.authorizationError = function ( message ) {
    return {
        msg: message,
        code: 401
    };
};
