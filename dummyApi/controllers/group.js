const dummyGroupList = require('../data/groupList.json');
exports.getGroupListByUserId = async (req, res) => {
  try{
    const {userId} = req.query;
    return res.status(200).json({data: dummyGroupList});
  }catch(err){
    throw err;
  }
}

// 내가 신청한 요청대기 중인 Group 리스트
exports.getWaitGroupListByUserId = async (req, res) => {
  try{
    const {userId} = req.query;
    return res.status(200).json({data: dummyGroupList});
  }catch(err){
    throw err;
  }
}

// 참여중인 그룹에서 나가기.
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