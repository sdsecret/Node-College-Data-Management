const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const auth = async (req,res,next) => {
    const token = req.cookies.access_token;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET ,(err,authUser) => {
            if(err){
                res.redirect('/login');
            }else{
                next();

            }
        });
    }else{
        res.redirect('/login');
    }
}



const authUser = (req,res,next) => {
    const token = req.cookies.access_token;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET ,async (err,authUser) => {
            if(err){
                res.locals.user = null;
                next();
            }else{
                let user = await Admin.findOne({
                    where:{
                        id:authUser.id
                    }
                })
                req.user = user;
                res.locals.user = user;
                next();
            }
        })
    }else{
        res.locals.user = null;
        next();
    }
}



const checkAuth = (req,res,next) => {
    if(res.locals.user){
       res.redirect('/dashboard');
    }else{
       next();
    }
}


module.exports = {
    auth,authUser,checkAuth
}