const {Sequelize} =  require('sequelize');

require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_CONNECTION,
    logging: false
});


sequelize.authenticate()
.then(() =>{
    console.log('Database connected.');
})
.catch((err) => {
    console.error('Unable to connect to the database:'+err);
});
    

module.exports = sequelize;