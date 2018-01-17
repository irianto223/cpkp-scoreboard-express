const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	lectureId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Lecture'
	},
	score: Number
}, {
	timestamps: true
})

const resultModel = mongoose.model('Result', resultSchema)

module.exports = resultModel
