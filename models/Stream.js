const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database');
const Subject = require('./Subject');

class Stream extends Model {}

Stream.init({
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    },
    stream_name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                args:true,
                msg:"Stream name is required"
            },
            notEmpty:{
                args:false,
                msg:"Stream name is required"
            }
        }
    }
},{
    sequelize,
    modelName:'Stream',
    timestamps:true
});

Stream === sequelize.models.Stream;

Stream.hasMany(Subject);
Subject.belongsTo(Stream);

Stream.sync({
    force:false
})
.then(() => {
    console.log("Stream table created ");
})
.catch((err) => {
    console.log(err);
});

module.exports = Stream;
