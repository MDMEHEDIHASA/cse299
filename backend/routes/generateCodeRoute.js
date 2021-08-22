const express = require('express');

const router = express.Router();
const protectMiddlewares = require('../middlewares/authMiddleWares')
const codeController = require('../controllers/generateCodeController')

router.post('/generateCode',protectMiddlewares,codeController.generateCodeController)

module.exports = router;