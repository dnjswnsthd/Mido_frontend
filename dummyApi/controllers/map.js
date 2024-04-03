
// 검색 시 id의 관련된 리스트가 보여짐.(마크표시)
exports.getAddressListByKeyword = async (req, res) => {
  try{
    // 주소만 좌표로 변환하여 식당정보들만 보여주기.
    return res.status(200).json({});
  }catch(err){
    throw err;
  }
}

// 검색 시 id의 관련된 리스트가 보여짐.(마크표시)
exports.getAddressListByKeyword = async (req, res) => {
  const {userId, keyword} = req.query;
  try{
    // 주소만 좌표로 변환하여 식당정보들만 보여주기.
    return res.status(200).json({});
  }catch(err){
    throw err;
  }
}
