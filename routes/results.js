const express = require('express')
const router = express.Router()
const resultController = require('../controllers/resultController')

router.get('/', resultController.all)
router.get('/me', resultController.allByUserId)

router.post('/', resultController.create)

router.delete('/score/:id', resultController.deleteScore)
router.delete('/:id', resultController.delete)

router.put('/score/:id', resultController.updateScore)

module.exports = router;
