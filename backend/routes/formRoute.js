const express = require('express')
const router = express.Router()
const formController = require('../controllers/formController')

const protectMiddlewares = require('../middlewares/authMiddleWares')

router.post('/createForm',protectMiddlewares,formController.createPostForm)


module.exports = router;