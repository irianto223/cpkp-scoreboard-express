const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.all)

router.post('/', userController.create)

router.delete('/:id', userController.delete)

router.put('/:id', userController.update)

module.exports = router;
