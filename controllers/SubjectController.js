const Subject = require('../models/Subject');

const index = async (req,res) => {
    res.render('subject/index',{
        page:'subjects',
        csrfToken: req.csrfToken()
    });
}

module.exports = {
    index
}