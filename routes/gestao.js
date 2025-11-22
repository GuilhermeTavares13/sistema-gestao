const express = require('express');

const gestaoController = require('../controllers/gestao');

const router = express.Router();

router.get('/', gestaoController.getIndex);
router.get('/signin',gestaoController.getSignIn);
router.get('/signup',gestaoController.getSignUp);
router.get('/cliente',gestaoController.getCliente);
router.get('/produto',gestaoController.getProduto);

module.exports = router;