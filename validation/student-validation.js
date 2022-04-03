const { check } = require('express-validator');

studentStore = [
    check('email',"Enter a valid email.").isEmail(),
    check('email',"Email field is required.").notEmpty(),
    check('name',"Enter name.").notEmpty(),
    check('phone',"Phone number is required.").notEmpty(),
    check('phone',"Enter valid phone number.").isMobilePhone(),
    check('roll','Enter roll number.').notEmpty(),
    check('password','Enter password.').notEmpty(),
    check('stream','Select stream.').notEmpty(),
    check('semester','Select semester.').notEmpty(),
    check('session','Select session.').notEmpty(),
];

module.exports = {
    studentStore
}