exports.getLogin = async (req, res) => {
  const {userId, userPw} = req.body;
  try{
    const userInfo = {id: userId, name: '준형갓'};
    return res.status(200).json(userInfo);
  }catch(err){
    throw err;
  }
}