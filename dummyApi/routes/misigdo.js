const express= require('express');
const router = express.Router();
const misigdoController = require('../controllers/misigdo');

router.get('/list', misigdoController.getMisigdoListById);

module.exports = router;