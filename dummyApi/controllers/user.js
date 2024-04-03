exports.postLogin = async (req, res) => {
  const {type} = req.body;
  console.log(type)
  try{
    const userInfo = {type, userId: 'cjh951114', name: '준형갓'};
    return res.status(200).json({type, userId: 'cjh951114', name: '준형갓'});
  }catch(err){
    throw err;
  }
}