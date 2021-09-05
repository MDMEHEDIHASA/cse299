const express = require('express');
const router = express.Router();

const protectMiddlewares = require('../middlewares/authMiddleWares')

const qsRsCltr = require('../controllers/questionResponseController')

router.get('/questionResponses/:generateCode',protectMiddlewares,qsRsCltr.questionResponseControllerUsingCode)
router.get('/allGenerateCode',protectMiddlewares,qsRsCltr.userResponsesByCode)


module.exports = router;