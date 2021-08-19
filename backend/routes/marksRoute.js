const express = require('express')
const router = express.Router()
const marksController = require('../controllers/marksController')


router.post('/marks',marksController.postMarksController)

module.exports = router