const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database');

class Admin extends Model {}
Admin.init({
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:true,
            notEmpty:{
                args:true,
                msg:"Name is required"
            }
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:{
            args:true,
            msg:"This email is already taken"
        },
        validate:{
            isEmail:{
                args:true,
                msg:"Invalid email"
            },
            notEmpty:{
                args:true,
                msg:"Email is required"
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:true,
            notEmpty:{
                args:true,
                msg:"Password is required"
            },
        }
    }
},{
    sequelize,
    modelName: 'Admin',
    timestamps:true
});

Admin === sequelize.models.Admin;

Admin.sync({force:false})
.then(() => {
    console.log("Admin table sync.");
})
.catch((err) => {
    console.log("some error occurs..");
})

module.exports = Admin;