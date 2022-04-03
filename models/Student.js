const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database');

class Student extends Model {}

Student.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unique:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    roll:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    session:{
        type:DataTypes.STRING,
        allowNull:false
    },
    semester:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    streamId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING(255),
    },
    profile_pic:{
        type:DataTypes.STRING,
    },
},{
    sequelize,
    modelName:"Student",
    timestamps:true
});


Student === sequelize.models.Student;

Student.sync({force:false})
.then(() => {
    console.log("students table created");
})
.catch((e) => {
    console.log(e);
})

module.exports = Student;