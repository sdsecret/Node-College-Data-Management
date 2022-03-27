const User = require('../models/User');
const { faker } = require('@faker-js/faker');
const testUser =  async (req,res) => {
    var testuser = [];
    for(let i=1; i<=100; i++){
        testuser.push({
            name:faker.name.firstName() + faker.name.lastName(),
            email:faker.internet.email(),
            phone:faker.phone.phoneNumber(),
            address:faker.address.cityName() + ',' + faker.address.streetAddress(),
            profile_pic:faker.image.avatar()
        })
    }

    let data = await User.bulkCreate(testuser);
    res.json({
        "success":"100 user created for testing"
    });
}


module.exports = {
    testUser
}