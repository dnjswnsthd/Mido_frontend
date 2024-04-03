const express= require('express');
const router = express.Router();
const groupController = require('../controllers/misigdo');

router.get('/list', groupController.getGroupById);

module.exports = router;