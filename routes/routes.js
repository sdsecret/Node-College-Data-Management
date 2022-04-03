const express = require('express');
const router = express.Router();

// Controllers
const TestingController = require('../controllers/TestingController');
const AdminController = require('../controllers/AdminController');
const StreamController = require('../controllers/StreamController');
const UserController = require('../controllers/UserController');
const SubjectController = require('../controllers/SubjectController');
const StudentController = require('../controllers/StudentController');

// Validations
const { studentStore } = require('../validation/student-validation');

// Middleware
const {auth,checkAuth} = require('../middlewares/auth');
const studentProfilePic = require('../middlewares/multer');

// Admin lagin register
router.get('/',checkAuth,AdminController.home);
router.get('/login',checkAuth,AdminController.login);
router.get('/register',checkAuth,AdminController.register);
router.post('/admin/register',checkAuth,AdminController.adminRegister);
router.post('/admin/login',checkAuth,AdminController.adminLogin);

// Testing controller
router.get('/user-testing-data',auth,TestingController.testUser);

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

// Subject routes
router.get('/subjects',auth, SubjectController.index);
router.get('/subjects-ajax',auth, SubjectController.getData);
router.get('/subject-create',auth, SubjectController.create);
router.post('/subject-store',auth, SubjectController.store);
router.get('/subject-edit/:id',auth, SubjectController.edit);
router.post('/subject-update',auth, SubjectController.update);
router.post('/subject-delete',auth, SubjectController.deleteSubject);


// Student routes
router.get('/students',auth, StudentController.index);
router.get('/student-create',auth, StudentController.create);
router.post('/student-store',auth,studentProfilePic.fields([
    {name:'profile_pic',maxCount:1}
]) ,studentStore ,StudentController.store);
router.get('/student-edit',auth, StudentController.edit);
router.post('/student-update',auth, StudentController.update);
router.post('/student-delete',auth, StudentController.deleteStudent);



module.exports = router;