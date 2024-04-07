const dummyGroupList = require('../data/groupList.json');
exports.getGroupListByUserId = async (req, res) => {
  try{
    const {userId} = req.query;
    return res.status(200).json({data: dummyGroupList});
  }catch(err){
    throw err;
  }
}

exports.deleteGroupItemByGroupId = async (req, res) => {
  try{
    const {group_id} = req.query;
    const gList = dummyGroupList
    const deleteIdx = dummyGroupList.map((el)=el.group_id).indexOf(group_id)
    gList.splice(deleteIdx, 1)

    return res.status(200).json({data: gList});
  }catch(err){
    throw err;
  }
}