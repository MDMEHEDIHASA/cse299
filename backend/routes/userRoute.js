const express  = require('express')
const router = express.Router();

const userController = require('../controllers/userController')
const protectMiddlewares = require('../middlewares/authMiddleWares')

router.post('/signin',userController.postLogIn)
router.post('/signup',userController.postSignUp)

router.get('/profile',protectMiddlewares,userController.getUserProfile)
router.put('/profile',protectMiddlewares,userController.updateUserProfile)


module.exports = router;
