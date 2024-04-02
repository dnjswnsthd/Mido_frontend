const express= require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/login', userController.getLogin);

module.exports = router;