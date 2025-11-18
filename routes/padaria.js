const express = require('express');

const padariaController = require('../controllers/padaria');

const router = express.Router();

router.get('/', padariaController.getIndex);
router.get('/signin',padariaController.getSignIn);
router.get('/signup',padariaController.getSignUp);

module.exports = router;