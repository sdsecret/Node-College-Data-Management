const express = require('express');
const router = express.Router();

// Controllers
const AdminController = require('../controllers/AdminController');
const StreamController = require('../controllers/StreamController');
const UserController = require('../controllers/UserController');

// Middleware
const {auth,checkAuth} = require('../middlewares/auth');

// Admin lagin register
router.get('/',checkAuth,AdminController.home);
router.get('/login',checkAuth,AdminController.login);
router.get('/register',checkAuth,AdminController.register);
router.post('/admin/register',checkAuth,AdminController.adminRegister);
router.post('/admin/login',checkAuth,AdminController.adminLogin);

// Auth routed
router.get('/dashboard',auth,AdminController.dashboard);
router.get('/logout',auth,AdminController.logout);


// Stream routes
router.get('/streams',auth, StreamController.index);
router.get('/streams-ajax',auth, StreamController.getData);
router.post('/stream-store',auth, StreamController.store);
router.get('/streams-edit/:id',auth, StreamController.edit);
router.post('/stream-update',auth, StreamController.update);
router.post('/stream-delete',auth, StreamController.deleteStream);


// Users
router.get('/users',auth,UserController.index);

module.exports = router;