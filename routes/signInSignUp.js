const express = require('express');

const signController = require('../controllers/signInSignUp');

const router = express.Router();

router.get('/signin', signController.getSignIn);

module.exports = router;