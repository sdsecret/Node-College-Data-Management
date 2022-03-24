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
    var size = parseInt(req.query.size);
    var page = parseInt(req.query.page);
    let data = await Stream.findAndCountAll({
        order:[
            ['id', 'DESC'],
        ],
        limit: size,
        offset: page * size
    });
    res.json({
        "streams":data.rows,
        "count":data.count
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


const edit = async (req,res) => {
    let data = await Stream.findByPk(req.params.id);
    res.json({
        "status":200,
        "stream":data
    });
}


const update = async (req,res) => {
    const { name,streamId } = req.body;
    try{
        let data = await Stream.update({
            stream_name:name
        },{
            where:{
                id:streamId
            }
        });

        res.json({
            "status":200,
            "success":"Stream Updated"
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
    index,update,store,deleteStream,getData,edit
}