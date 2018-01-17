const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	username: {
		type: String,
		unique: true
	},
	password: String,
	role: String
}, {
	timestamps: true
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
