const dummyMisigdoList = require('../data/data.json');

// 검색 시 id의 관련된 리스트가 보여짐.(마크표시)
exports.getAddressListByKeyword = async (req, res) => {
  try{
    const {userId, search, page} = req.query;
    console.log(search, page)
    const limit = 5;
    
    const itemInfo = dummyMisigdoList.slice((Number(page)-1)*limit, limit).map(misigdo=>misigdo.round).flat(2)
    return res.status(200).json({data: itemInfo});
    
  }catch(err){
    throw err;
  }
}

// keyword & &userId가 포함된 리스트 리턴.
exports.getMisigdoListByKeyword = async (req, res) => {
  const {userId, search, page} = req.query;
  const limit = 5;

  try{
    // 해당 userId가 있는 keywrod가 포함된 리스트 리턴하게하기.
    const itemInfo = {data: dummyMisigdoList.slice((Number(page)-1)*limit, limit)};
    return res.status(200).json(itemInfo);
  }catch(err){
    throw err;
  }
}