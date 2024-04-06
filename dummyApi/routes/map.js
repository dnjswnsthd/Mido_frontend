const express= require('express');
const router = express.Router();
const mapController = require('../controllers/map');

router.get('/addressList', mapController.getAddressListByKeyword);

module.exports = router;