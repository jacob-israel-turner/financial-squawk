var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var q = require('q');

//how it is storing the data on Mongoose. creating a new instance on schema
var userSchema = new Schema({
	email: { type: String, unique: true },
	password: String,
});

//pre('save') is mongoose middleware that runs before every user is created
userSchema.pre('save', function(next) {
	var user = this;
	//take password and encrypt it
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			console.log(hash);
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.verifyPassword = function(password) {
	var deferred = q.defer();
	var user = this;
	bcrypt.compare(password, user.password, function(err, res) {
		if (err) {
			deferred.resolve(false);
		}
		deferred.resolve(res);
	});
	return deferred.promise;
};

module.exports = mongoose.model('User', userSchema);