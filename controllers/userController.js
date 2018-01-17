const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
	create: (req, res) => {
		const salt = bcrypt.genSaltSync(10)
		req.body.password = bcrypt.hashSync(req.body.password, salt)

		User.create(req.body)
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	all: (req, res) => {
		User.find({
			role: 'student'
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	login: (req, res) => {
		User.findOne({
			username: req.body.username
		})
		.then(result => {
			if (result == null) {
				res.send({ message: 'username not found' })
			}
			else {
				if (bcrypt.compareSync(req.body.password, result.password)) {
					const token = jwt.sign({
						_id: result._id,
						name: result.name,
						email: result.email,
						role: result.role
					}, 'satekambing')

					res.send({
						message: 'success',
						token: token
					})
				} else {
					res.send({ message: 'password incorrect' })
				}
			}
		})
	},
	delete: (req, res) => {
		User.remove({
			_id: req.params.id
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	},
	update: (req, res) => {
		User.update({
			_id: req.params.id
		}, {
			name: req.body.name,
			email: req.body.email,
			username: req.body.username
		})
		.then(result => res.send(result))
		.catch(err => res.send(err))
	}
}
