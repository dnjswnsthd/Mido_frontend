const express= require('express');
const router = express.Router();
const groupController = require('../controllers/group');

router.get('/list', groupController.getGroupListByUserId);
router.delete('/item/:group_id', groupController.deleteGroupItemByGroupId);

module.exports = router;