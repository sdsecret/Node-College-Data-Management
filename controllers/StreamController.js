const Stream = require('../models/Stream');

const index = async (req,res) => {
    let data = await Stream.findAll({
        order:[
            ['id', 'DESC'],
        ]
    });
    res.render('stream/index',{
        page:'stream',
        streams:data,
        csrfToken: req.csrfToken()
    });
}


const getData = async (req,res) => {
    let data = await Stream.findAll({
        order:[
            ['id', 'DESC'],
        ]
    });
    res.json({
        "streams":data
    });
}


const store = async (req,res) => {
    const { name } = req.body;
    try{
        let data = await Stream.create({
            stream_name:name
        });

        res.json({
            "status":200,
            "success":"Stream Added"
        });

    }catch(e){
        messages = {};
        e.errors.forEach(error => {
            messages[error.path] = error.message;
        });
        res.json({
            "status":200,
            "errors":messages
        });
    }
}

const update = async (req,res) => {
    
}


const deleteStream = async (req,res) => {
    const { streamId } = req.body;
    let data = await Stream.destroy({
        where:{
            id:streamId
        }
    });

    res.json({
        "status":200,
        "success":"Stream Deleted"
    });
}


module.exports = {
    index,update,store,deleteStream,getData
}