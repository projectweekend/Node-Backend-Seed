var appModels = require( '../models' );
var MongooseDataManager = require( '../utils/data_manager' ).MongooseDataManager;


exports.standard = MongooseDataManager( appModels.User );
