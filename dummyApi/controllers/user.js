exports.postLogin = async (req, res) => {
  const {type} = req.body;
  console.log(type)
  try{
    return res.status(200).json({type, userId: 'cjh951114', name: '준형갓'});
  }catch(err){
    throw err;
  }
}

exports.putUserNickname = async (req, res) => {
  const {userId, userName} = req.body;
  console.log(type)
  try{
    return res.status(200).json({type, userId: 'cjh951114', name: '준형갓'});
  }catch(err){
    throw err;
  }
}