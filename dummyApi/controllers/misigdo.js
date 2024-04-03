const dummyMisigdoItem = require('../data/data.json');

exports.getMisigdoListById = async (req, res) => {
  const {userId} = req.query;
  try{
    const itemInfo = {data: dummyMisigdoItem};
    return res.status(200).json(itemInfo);
  }catch(err){
    throw err;
  }
}
exports.getMisigdoItemByMisigdoId = async (req, res) => {
  const {userId, groupId} = req.query;
  try{

    // 더보기 선택한 groupId 내용 조회 디테일 
    const itemInfo = {data: dummyMisigdoItem};
    return res.status(200).json(itemInfo);
  }catch(err){
    throw err;
  }
}
exports.postMisigdoItemReview = async (req, res) => {
  const {userId, groupId, roundId, evaluation, review_image} = req.body;
  try{

    // 더보기 선택한 groupId 내용 조회 디테일 
    const itemInfo = {data: dummyMisigdoItem};
    return res.status(200).json(itemInfo);
  }catch(err){
    throw err;
  }
}