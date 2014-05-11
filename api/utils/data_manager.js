var systemError = require( '../utils' ).systemError;


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
        list: function ( data, callback ) {
            model.find( data, function ( err, results ) {
                if ( err ) {
                    return callback( systemError( err ) );
                }
                return callback( null, results );
            } );
        },
        read: function ( id, callback ) {
            model.findById( id, function ( err, result ) {
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
