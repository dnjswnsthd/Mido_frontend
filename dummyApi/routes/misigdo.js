const express= require('express');
const router = express.Router();
const misigdoController = require('../controllers/misigdo');

router.get('/list', misigdoController.getMisigdoListById);
router.get('/item', misigdoController.getMisigdoItemByMisigdoId);

module.exports = router;