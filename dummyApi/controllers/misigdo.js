const dummyMisigdoList = require('../data/data.json');


exports.getMisigdoListById = async (req, res) => {
  const {userId, page} = req.query;
  const limit = 5;

  try{
    const itemInfo = {data: dummyMisigdoList.slice((Number(page)-1)*limit, limit)};
    console.log(itemInfo)
    return res.status(200).json(itemInfo);
  }catch(err){
    throw err;
  }
}
exports.getMisigdoItemByMisigdoId = async (req, res) => {
  const {userId, groupId} = req.query;
  try{
    const target = dummyMisigdoList.find((el)=>el.group_id===groupId);
    console.log(target)
    // 더보기 선택한 groupId 내용 조회 디테일 
    const itemInfo = {data: target};
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