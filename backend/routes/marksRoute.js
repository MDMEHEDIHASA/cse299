const express = require('express')
const router = express.Router()
const marksController = require('../controllers/marksController')
const protectMiddlewares = require('../middlewares/authMiddleWares')


router.post('/marks',protectMiddlewares,marksController.postMarksController)

module.exports = router