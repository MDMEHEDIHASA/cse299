const express = require('express')
const router = express.Router()

const proudctController = require('../controllers/productController')



router.get('/getproducts',proudctController.getProudcts)

module.exports = router;