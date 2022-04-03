const Student = require('../models/Student');
const Stream = require('../models/Stream');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const index = async (req,res) => {
    let data = await Student.findAll({
        include:[
            {
                model:Stream,
                attributes:['stream_name']
            }
        ],
        order:[
            ['id','DESC']
        ]
    })
    res.render('student/index',{
        page:'students',
        students:data
    });
}

const create = async (req,res) => {
    let data = await Stream.findAll();
    res.render("student/create",{
        page:"student-create",
        streams:data,
        csrfToken: req.csrfToken(),
        message: req.flash('message'),
    });
}

const store = async (req,res) => {
    var errors = validationResult(req);
    if(!errors.isEmpty()){
        // console.log(errors);
        req.flash('errors', errors.array());
        res.redirect('/student-create');
    }else{
        let data = await Student.create({
            name:req.body.name,
            roll:req.body.roll,
            profile_pic: req.files.profile_pic[0].filename,
            email:req.body.email,
            phone:req.body.phone,
            streamId:req.body.stream,
            semester:req.body.semester,
            session:req.body.session,
            email:req.body.email,
            password:await bcrypt.hash(req.body.password,10)
        });
        req.flash('success', "Student Added Successfully.");
        res.redirect('/students');
    }
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