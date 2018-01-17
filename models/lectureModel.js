const mongoose = require('mongoose')

const lectureSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true
	},
	minimumScore: Number
}, {
	timestamps: true
})

const lectureModel = mongoose.model('Lecture', lectureSchema)

module.exports = lectureModel
