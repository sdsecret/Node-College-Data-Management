const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database');

class Student extends Model {}

Student.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        name:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isNull:{
                args:false,
                msg:"Email is required",
            },
            notEmpty:{
                args:true,
                msg:"Email is required"
            },
            isEmail:{
                args:true,
                msg:"Invalid email"
            }
        }
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isNumeric:{
                args:true,
                msg:"Invalid phone number"
            },
            notEmpty:{
                args:true,
                msg:"Phone number is required"
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:{
                args:8,
                msg:"Password must be 8 character long"
            }
        }
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Address is required"
            }
        }
    },
    streamId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Select a stream"
            }
        }
    }
},{
    sequelize,
    modelName:"Student",
    timestamps:true
});


Student === sequelize.models.Student;

Student.sync({
    force:false
})
.then(() => {
    console.log("Student table created");
})
.catch((err) => {
    console.log(err);
});


module.exports = Student;