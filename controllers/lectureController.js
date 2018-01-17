const Lecture = require('../models/lectureModel')
const bcrypt = require('bcryptjs')

module.exports = {
	create: (req, res) => {
		Lecture.create(req.body)
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	all: (req, res) => {
		Lecture.find()
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	delete: (req, res) => {
		Lecture.remove({
			_id: req.params.id
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	update: (req, res) => {
		Lecture.update({
			_id: req.params.id
		}, {
			name: req.body.name,
			minimumScore: req.body.minimumScore
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	}
}
