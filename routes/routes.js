const express = require('express');
const router = express.Router();

// Controllers
const AdminController = require('../controllers/AdminController');

router.get('/',AdminController.home);
router.get('/login',AdminController.login);
router.get('/register',AdminController.register);
router.post('/admin/register',AdminController.adminRegister);
router.post('/admin/login',AdminController.adminLogin);

router.get('/dashboard',AdminController.dashboard);



module.exports = router;