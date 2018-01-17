var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET home page. */
router.get('/', (req, res) => {
  res.send({ message: 'it works! '});
});

router.post('/login', userController.login)

module.exports = router;
