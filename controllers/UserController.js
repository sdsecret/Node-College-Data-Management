
const index = async (req,res) => {
    res.render('users/index',{
        page:'users'
    });
}


module.exports = {
    index
}