const express = require('express');
const router = express.Router();

// Controllers
const AdminController = require('../controllers/AdminController');

// Middleware
const {auth,checkAuth} = require('../middlewares/auth');



router.get('/',checkAuth,AdminController.home);
router.get('/login',checkAuth,AdminController.login);
router.get('/register',checkAuth,AdminController.register);
router.post('/admin/register',checkAuth,AdminController.adminRegister);
router.post('/admin/login',checkAuth,AdminController.adminLogin);

// Auth routed
router.get('/dashboard',auth,AdminController.dashboard);
router.get('/logout',auth,AdminController.logout);



module.exports = router;