const express  = require('express')
const router = express.Router();

const userController = require('../controllers/userController')
const protectMiddlewares = require('../middlewares/authMiddleWares')
const studentResponseController = require('../controllers/sendStudentResponseController')

router.post('/signin',userController.postLogIn)
router.post('/signup',userController.postSignUp)




router.get('/profile',protectMiddlewares,userController.getUserProfile)
router.put('/profile',protectMiddlewares,userController.updateUserProfile)


router.get('/sendResponse/:code',protectMiddlewares,studentResponseController.getStudentResponse)
router.post('/sendResponse',protectMiddlewares,studentResponseController.sendStudentResponse)




module.exports = router;
