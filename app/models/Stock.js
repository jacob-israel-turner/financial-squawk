var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//how it is storing the data on Mongoose. creating a new instance on schema
var stockSchema = new Schema({
	ticker: { type: String, unique: true},
	totalrevenue: Number,
	costofrevenue: Number,
	netincome: Number,
	createdAt: { type: Date }
});


module.exports = mongoose.model('Stock', stockSchema);