const express = require('express')
const router = express.Router()
const formController = require('../controllers/formController')

router.post('/createForm',formController.createPostForm)


module.exports = router;