const express= require('express');
const router = express.Router();
const misigdoController = require('../controllers/misigdo');

router.get('/item', misigdoController.getMisigdoItem);

module.exports = router;