const dummyMisigdoItem = require('../data/data.json');

exports.getMisigdoItem = async (req, res) => {
  const {userId, userPw} = req.body;
  try{
    const itemInfo = {data: dummyMisigdoItem};
    return res.status(200).json(itemInfo);
  }catch(err){
    throw err;
  }
}