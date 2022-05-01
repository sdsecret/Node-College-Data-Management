const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:DataTypes.STRING,
    email:DataTypes.STRING(255),
    phone:DataTypes.STRING,
    address:DataTypes.STRING,
    profile_pic:DataTypes.STRING
},{
    sequelize,
    modelName:'User',
    timestamps:true
});

User === sequelize.models.User;

User.sync({force:false})
.then(() => {
    // console.log("User Table Created");
})
.catch((err) => {
    console.log(err);
})

module.exports = User;
