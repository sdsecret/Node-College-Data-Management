const Subject = require('../models/Subject');
const Stream = require('../models/Stream');
const index = async (req,res) => {
    res.render('subject/index',{
        page:'subjects',
        csrfToken: req.csrfToken()
    });
}


const getData = async (req,res) => {
    // var size = parseInt(req.query.size);
    // var page = parseInt(req.query.page) - 1;
    let data = await Subject.findAndCountAll({
        order:[
            ['id', 'DESC'],
        ],
        include:[
            {
                model:Stream,
                attributes:['stream_name']
            }
        ]
    });
    res.json({
        "status":200,
        "subjects":data
    })
}

const create = async (req,res) => {
    let data = await Stream.findAll();
    res.json({
        "streams":data
    });
}

const store = async (req,res) => {
    const {streamId ,name} = req.body;
    try{
        let data = await Subject.create({
            subject_name:name,
            streamId:streamId,
            status:1
        });
        res.json({
            "status":200,
            "success":"Subject Added"
        })
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
    let streams = await Stream.findAll();
    let data = await Subject.findByPk(req.params.id);
    res.json({
        "status":200,
        "subject":data,
        "streams":streams
    });
}

module.exports = {
    index,getData,store,create,edit
}