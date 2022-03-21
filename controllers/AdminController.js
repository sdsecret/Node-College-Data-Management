const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const home = async (req,res) => {
    res.render('index',{
        page:'home'
    });
}


const login = async (req,res) => {
    res.render('login',{
        page:'login'
    });
}

const register = async (req,res) => {
    res.render('register',{
        page:'register'
    });
}


const adminRegister = async (req,res) => {
    let {name,email,password} = req.body;
    try{
        let user = await Admin.create({
            name:name,
            email:email,
            password:await bcrypt.hash(password,10)
        });
        res.json({
            "status":200,
            "success":"Registration Successful."
        })
    }catch(e){
        messages = {};
        e.errors.forEach(error => {
            messages[error.path] = error.message;
        });
        res.json({
            "status":200,
            "errors":messages
        })
    }
}

const adminLogin = async(req,res) => {
    const {email,password} = req.body;
    const messages = {};
    if(email === ''){
        messages['email'] = "Email is required"
    }else if(password === ''){
        messages['password'] = "Password is required"
    }else{
        try{
            let user = await Admin.findOne({
                where:{
                    email:email
                }
            });
            if(!user){
                return res.json({'status':401,'invalid':'Wrong Email or Password.'});
            }

            console.log(user);

                if(await bcrypt.compare(password,user.password)){
                    const token = jwt.sign({
                        id:user.id,
                        name:user.name,
                        email:user.email
                    },process.env.JWT_SECRET,{
                        expiresIn:'10d',
                    })
            
                    return res.cookie("access_token", token, {
                        httpOnly: true,
                    }).status(200).json({
                        'success':'Login Successful'
                    });
                }

        }catch(e){
            return res.json({'status':401,'invalid':'Wrong Email or Password.'});
        }
        
    }

    res.json({
        'errors':messages
    }
   )
}

module.exports = {
    home,
    login,
    register,
    adminRegister,
    adminLogin
}