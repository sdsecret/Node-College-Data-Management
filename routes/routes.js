const express = require('express');
const router = express.Router();

// Controllers
const AdminController = require('../controllers/AdminController');
const StreamController = require('../controllers/StreamController');

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
router.post('/stream-store',auth, StreamController.store);
router.post('/stream-update',auth, StreamController.update);
router.get('/stream-delete/:id',auth, StreamController.deleteStream);


module.exports = router;