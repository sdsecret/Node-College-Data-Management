const Stream = require('../models/Stream');

const index = async (req,res) => {
    res.render('stream/index',{
        page:'stream',
    });
}

const store = async (req,res) => {
    
}

const update = async (req,res) => {
    
}


const deleteStream = async (req,res) => {
    
}


module.exports = {
    index,update,store,deleteStream
}