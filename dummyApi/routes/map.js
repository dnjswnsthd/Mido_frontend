const express= require('express');
const router = express.Router();
const mapController = require('../controllers/map');

router.get('/addressList', mapController.getAddressListByKeyword);
router.get('/list', mapController.getMisigdoListByKeyword);

module.exports = router;