const express= require('express');
const router = express.Router();
const mapController = require('../controllers/map');

router.get('/list', mapController.getListByKeyword);

module.exports = router;