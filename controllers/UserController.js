const User = require('../models/User');

const index = async (req,res) => {
    let data = await User.findAll();
    res.render('users/index',{
        page:'users',
        users:data
    });
}




module.exports = {
    index
}