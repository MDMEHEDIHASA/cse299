const express = require('express')
const router = express.Router()

const proudctController = require('../controllers/productController')


router.get('/',proudctController.homeMiddleware)


module.exports = router;