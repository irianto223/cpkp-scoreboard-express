const express = require('express')
const router = express.Router()
const lectureController = require('../controllers/lectureController')

router.get('/', lectureController.all)

router.post('/', lectureController.create)

router.delete('/:id', lectureController.delete)

router.put('/:id', lectureController.update)

module.exports = router;
