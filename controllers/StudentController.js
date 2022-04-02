const Student = require('../models/Student');
const Stream = require('../models/Stream');
const index = async (req,res) => {
    let data = await Student.findAll({
        include:[
            {
                model:Stream,
                attributes:['stream_name']
            }
        ]
    })
    res.render('student/index',{
        page:'students',
        students:data
    });
}

const create = async (req,res) => {

}

const store = async (req,res) => {

}

const edit = async (req,res) => {

}

const update = async (req,res) => {

}

const deleteStudent = async (req,res) => {

}

module.exports = {
    index,create,store,edit,update,deleteStudent
}