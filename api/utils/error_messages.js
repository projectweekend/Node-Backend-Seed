exports.conflictError = function ( message ) {
    return {
        type: "custom",
        msg: message,
        code: 409
    };
};


exports.systemError = function () {
    return {
        type: "custom",
        msg: "A system error occurred",
        code: 500
    };
};


exports.authorizationError = function ( message ) {
    return {
        type: "custom",
        msg: message,
        code: 401
    };
};


exports.validationError = function ( errors ) {
    return {
        type: "custom",
        messages: errors,
        code: 400
    };
};
