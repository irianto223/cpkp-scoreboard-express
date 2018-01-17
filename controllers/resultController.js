const Result = require('../models/resultModel')
const jwt = require('jsonwebtoken')

module.exports = {
	create: (req, res) => {
		const decoded = jwt.verify(req.headers.token, 'satekambing')

		Result.create({
			userId: decoded._id,
			lectureId: req.body.lectureId,
			score: req.body.score
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	all: (req, res) => {
		Result.find()
		.populate({
			path: 'userId',
			model: 'User'
		})
		.populate({
			path: 'lectureId',
			model: 'Lecture'
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	delete: (req, res) => {
		Result.remove({
			_id: req.params.id
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	allByUserId: (req, res) => {
		const decoded = jwt.verify(req.headers.token, 'satekambing')

		Result.find({
			userId: decoded._id
		})
		.populate({
			path: 'userId',
			model: 'User'
		})
		.populate({
			path: 'lectureId',
			model: 'Lecture'
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	updateScore: (req, res) => {
		const decoded = jwt.verify(req.headers.token, 'satekambing')

		Result.findOne({
			userId: decoded._id,
			lectureId: req.params.id
		})
		.then(result => {
			if (result == null) {
				Result.create({
					userId: decoded._id,
					lectureId: req.params.id,
					score: req.body.score
				})
				.then(result => res.send(result))
				.catch(err => res.send(err))
			} else {
				Result.update({
					userId: decoded._id,
					lectureId: req.params.id
				}, {
					score: req.body.score
				})
				.then(result => res.send(result))
				.catch(err => res.send(err))
			}
		})
	},
	deleteScore: (req, res) => {
		const decoded = jwt.verify(req.headers.token, 'satekambing')

		Result.remove({
			lectureId: req.params.id,
			userId: decoded._id
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
}
