const { DataTypes,Model } = require('sequelize');
const sequelize = require('../config/database');

class Subject extends Model {}

Subject.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        unique:true,
        primaryKey:true
    },
    subject_name:{
        type:DataTypes.STRING(255),
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Subject name is required"
            }
        }
    },
    streamId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:{
                type:true,
                msg:"Select a stream"
            }
        }
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }

},{
    sequelize,
    modelName:"Subject",
    timestamps:true
});

Subject === sequelize.models.Subject;

Subject.sync({force:false})
.then(() => {
    // console.log("Subject table created");
})
.catch((err) => {
    console.log(err);
});

module.exports = Subject;