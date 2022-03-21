const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database');

class Stream extends Model {}

Stream.init({
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    },
    stream_name:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notNull:{
                args:true,
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
