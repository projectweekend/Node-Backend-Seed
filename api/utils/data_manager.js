var systemError = require( '../utils/error_messages' ).systemError;


exports.MongooseDataManager = function ( model ) {
    return {
        create: function ( data, callback ) {
            model.create( data, function ( err, result ) {
                if ( err ) {
                    return callback( systemError( err ) );
                }
                return callback( null, result );
            } );
        },
        list: function ( data, fields, callback ) {
            var query = model.find( data );

            if ( arguments.length === 2 ) {
                callback = fields;
            } else {
                query.select( fields );
            }

            query.exec( function ( err, results ) {
                if ( err ) {
                    return callback( systemError( err ) );
                }
                return callback( null, results );
            } );
        },
        read: function ( id, fields, callback ) {
            var query = model.findById( id );

            if ( arguments.length === 2 ) {
                callback = fields;
            } else {
                query.select( fields );
            }

            query.exec( function ( err, result ) {
                if ( err ) {
                    return callback( systemError( err ) );
                }
                return callback( null, result );
            } );
        },
        update: function ( id, update, callback ) {
            model.findByIdAndUpdate( id, update, function ( err, result ) {
                if ( err ) {
                    return callback( systemError( err ) );
                }
                return callback( null, result );
            } );
        },
        delete: function ( id, callback ) {
            model.findByIdAndRemove( id, function ( err, result ) {
                if ( err ) {
                    return callback( systemError( err ) );
                }
                return callback( null, {} );
            } );
        }
    };
};
