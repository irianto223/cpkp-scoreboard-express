const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

exports.createAdmin = () => {
	const salt = bcrypt.genSaltSync(10)
	const hash = bcrypt.hashSync('anak223', salt)

	User.findOne({
		name: 'Admin',
		email: 'admin@mail.com',
		username: 'admin',
		role: 'admin'
	})
	.then(data => {
		if (data == null) {
			User.create({
				name: 'Admin',
				email: 'admin@mail.com',
				username: 'admin',
				password: hash,
				role: 'admin'
			})
			.then(result => console.log('Admin created.', result))
			.catch(err => console.log(err))
		}
	})
	.catch(err => console.log(err))
}
